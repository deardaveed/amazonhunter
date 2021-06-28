import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import * as sessionActions from "../../store/session";
import { setProduct } from "../../store/products"
// import css

function ProductDetails() {
	// const dispatch = useDispatch();
	// const product = useSelector((state) => Object.values(state.product));

	// useEffect(() => {
	// 	dispatch(setProduct());
	// }, [dispatch]);

	return (
		<div>
      <table>
				<tbody>
					<tr>
						{/* return {
							<div key={`${product.id}`}>{product.title}</div>
						} */}
					</tr>
        </tbody>
			</table>
		</div>
	)
};

export default ProductDetails;
