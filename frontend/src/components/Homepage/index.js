import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import * as sessionActions from "../../store/session";
import { setProducts } from "../../store/products"
// import css

function Homepage() {
	const dispatch = useDispatch();
	const products = useSelector((state) => Object.values(state.products));

	useEffect(() => {
		dispatch(setProducts());
	}, [dispatch]);

	return (
		<div>
			<img src={`../../../public/logo-orange-f8981d.png`} alt='logo' />
      <table>
				<tbody>
					<tr>
						{products.map((product) => {
							return <div key={`${product.id}`}>{product.title}</div>
						})};
					</tr>
        </tbody>
			</table>
		</div>
	);
};

export default Homepage;
