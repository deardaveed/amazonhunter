// frontend/src/components/AddProductForm/index.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import css
import { setProduct, editProduct } from "../../store/products"
// import * as sessionActions from "../../store/session";

function UpdateProductForm() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

	const sessionUser = useSelector((state) => state.session.user);

	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [productUrl, setProductUrl] = useState('');
	const [description, setDescription] = useState('');
  // const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/">;
	useEffect(() => {
		dispatch(setProduct(+id)); //! is parseInt conversion needed here?
	}, [dispatch, id]); //! is parseInt conversion needed here?

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setErrors([]);
		await dispatch(
			editProduct({
				id: +id,	//! test parseInt
				ownerId: sessionUser.id,
				title,
				imageUrl,
				productUrl,
				description
			})
		)

		history.push('/');
		// 	.catch(async (res) => {
		// 	const data = await res.json();
		// 	if (data && data.errors) setErrors(data.errors);
		// });
	};

	return (
			<form onSubmit={handleSubmit}>
				<h3>Update A Product</h3>
				{/* <ul>
					{errors.map((error, idx) => <li key={idx}>{error}</li>)}
				</ul> */}
				<label>
					Title
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</label>
				<label>
					Image URL
					<input
						type="text"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						required
					/>
				</label>
				<label>
					Product URL
					<input
						type="text"
						value={productUrl}
						onChange={(e) => setProductUrl(e.target.value)}
						required
					/>
				</label>
				<label>
					Description
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Update Product</button>
			</form>
  );
}

export default UpdateProductForm;
