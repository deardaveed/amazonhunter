import { csrfFetch } from "./csrf";

//TODO Define Action Types as Constants
const GET_PRODUCTS = "products/GET_PRODUCTS";
// const GET_PRODUCT = "products/GET_PRODUCT";
const ADD_PRODUCT = "products/ADD_PRODUCT";
// const UPDATE_PRODUCT = "products/EDIT_PRODUCT";
// const DELETE_PRODUCT = "products/DELETE_PRODUCT";

//TODO Define Action Creators
const getProducts = (products) => {
	return {
		type: GET_PRODUCTS,
		payload: products
	}
};

// const getProduct = (product) => {
// 	return {
// 		type: GET_PRODUCT,
// 		payload: product
// 	}
// };

const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: product
	}
};

// const updateProduct = (product) => {
// 	return {
// 		type: UPDATE_PRODUCT,
// 		payload: product
// 	}
// };

// const deleteProduct = (product) => {
// 	return {
// 		type: DELETE_PRODUCT,
// 		payload: product,
// 	}
// };

//TODO Define Thunks
//! GET ALL PRODUCTS
export const setProducts = () => async (dispatch) => {
	const response = await csrfFetch(`/api/products`);
	const products = await response.json();

	if (response.ok) {
		// console.log('*****products (plural) *****', products);
		dispatch(getProducts(products));
	}
};

// //! GET SINGLE PRODUCT
// export const setProduct = (id) => async (dispatch) => {
// 	const response = await csrfFetch(`/api/products/${id}`);
// 	const product = await response.json();

// 	if (response.ok) {
// 		console.log('*****product (singular)*****', product);
// 		dispatch(getProduct(product));
// 	}
// };

// //! ADD A PRODUCT
export const newProduct = (product) => async (dispatch) => {
	const { title, imageUrl, productUrl, description } = product;

	const response = await csrfFetch(`/api/products/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title,
			imageUrl,
			productUrl,
			description
		})
	});

	const data = await response.json();
	dispatch(addProduct(data));
	return response;
};

// //! UPDATE A PRODUCT
// export const editProduct = (product) => async (dispatch) => {
// 	const { title, imageUrl, productUrl, description } = product;
// 	const response = await csrfFetch(`/api/products/update/${product.id}`, {
// 		method: 'PUT',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			title,
// 			imageUrl,
// 			productUrl,
// 			description
// 		})
// 	});

// 	if (response.ok) {
// 		const data = await response.json();
// 		dispatch(updateProduct(product));
// 		return data;
// 	}
// };

// //! DELETE A PRODUCT
// export const removeProduct = (product) => async (dispatch) => {
// 	const response = await csrfFetch(`/api/products/delete/${product.id}`, {
// 		method: 'DELETE',
// 		body: JSON.stringify({
// 			product
// 		})
// 	});

// 	dispatch(deleteProduct(product));
// 	return response;
// };

//TODO Define an initial state
const initialState = {};

//TODO Define a reducer
const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			const allProducts = {};
			// console.log("******REDUCER*****", action.payload);
			action.payload.forEach((product) => {
				allProducts[product.id] = product;
			});

			return {
				...state,
				...allProducts
			};

		// case GET_PRODUCT:

		// 	return {

		// 	};

		// case ADD_PRODUCT:

		// 	return {

		// 	};

		// case UPDATE_PRODUCT:

		// 	return {

		// 	};

		// case DELETE_PRODUCT:

		// 	return {

		// 	};

		default:
			return state;
	}
};

//TODO Export the reducer
export default productsReducer;
