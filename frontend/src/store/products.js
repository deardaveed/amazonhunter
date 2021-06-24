import { csrfFetch } from "./csrf";

//TODO Define Action Types as Constants
const LOAD_PRODUCTS = "products/LOAD_PRODUCTS";
const LOAD_PRODUCT = "products/LOAD_PRODUCT";
const ADD_PRODUCT = "products/ADD_PRODUCT";
const EDIT_PRODUCT = "products/EDIT_PRODUCT";
const DELETE_PRODUCT = "products/DELETE_PRODUCT";

//TODO Define Action Creators
const loadProducts = (products) => {
	return {
		type: LOAD_PRODUCTS,
		payload: products
	}
};

const loadProduct = (product) => {
	return {
		type: LOAD_PRODUCT,
		payload: product
	}
};

const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: product
	}
};

const editProduct = (product) => {
	return {
		type: EDIT_PRODUCT,
		payload: product
	}
};

const deleteProduct = (product) => {
	return {
		type: DELETE_PRODUCT,
		payload: product,
	}
};

//TODO Define Thunks
//! GET ALL PRODUCTS
export const getProducts = () => async (dispatch) => {
	const response = await csrfFetch(`/api/products`);
	const products = await response.json();

	if (response.ok) {
		console.log('*****products (plural) *****', products);
		dispatch(loadProducts(products));
	}
};

//! GET SINGLE PRODUCT
export const getProduct = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/products/${id}`);
	const product = await response.json();

	if (response.ok) {
		console.log('*****product (singular)*****', product);
		dispatch(loadProduct(product));
	}
};

//! ADD A PRODUCT
export const newProduct = (product) => async (dispatch) => {
	const { title, imageUrl, productUrl, description } = product;
	const response = await csrfFetch(`/api/products/add`)
};

//! UPDATE A PRODUCT
export const updateProduct = (product) => async (dispatch) => {
	const { } = product;
	const response = await csrfFetch(`/api/products/update`)
};

//! DELETE A PRODUCT
export const removeProduct = (product) => async (dispatch) => {
	const { } = product;
	const response = await csrfFetch(`/api/products/delete`)
};

//TODO Define an initial state
//TODO Define a reducer
//TODO Export the reducer
