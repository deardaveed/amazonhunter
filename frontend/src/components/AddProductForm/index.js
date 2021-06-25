// frontend/src/components/AddProductForm/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import css
import { newProduct } from "../../store/products"
// import * as sessionActions from "../../store/session";

function AddProductForm() {
  const dispatch = useDispatch();
	// const sessionUser = useSelector((state) => state.session.user);
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [productUrl, setProductUrl] = useState('');
	const [description, setDescription] = useState('');
  // const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		// setErrors([]);
		return dispatch(
			newProduct({
				title,
				imageUrl,
				productUrl,
				description
			})
		)
		// 	.catch(async (res) => {
		// 	const data = await res.json();
		// 	if (data && data.errors) setErrors(data.errors);
		// });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>Add A Product</h3>
				<h5>(ALL FIELDS REQUIRED!)</h5>
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
				<button type="submit">Add Product</button>
			</form>
		</div>
  );
}

export default AddProductForm;
