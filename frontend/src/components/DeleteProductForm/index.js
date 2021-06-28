// frontend/src/components/DeleteProductForm/index.js
import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import css
import { getProduct, removeProduct } from "../../store/products"
// import * as sessionActions from "../../store/session";

const DeleteProductForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

	// useEffect(() => {
	// dispatch(removeProduct(id)); //! is parseInt conversion needed here?
	// }, [dispatch, id]); //! is parseInt conversion needed here?

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setErrors([]);
		await dispatch(removeProduct(id));
		history.push('/');
		// 	.catch(async (res) => {
		// 	const data = await res.json();
		// 	if (data && data.errors) setErrors(data.errors);
		// });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				Do you want to remove this product from AmazonHunter?
				<button type="submit">Remove Product</button>
			</div>
		</form>
  );
}

export default DeleteProductForm;
