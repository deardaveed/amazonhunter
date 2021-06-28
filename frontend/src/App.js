// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import SignupFormPage from "./components/SignupFormPage";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";
import DeleteProductForm from "./components/DeleteProductForm";
import Navigation from "./components/Navigation";
// import ProductDetails from "./components/ProductDetails"
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
				<Switch>
          <Route path="/" exact>
						<Homepage />
          </Route>
          <Route path="/signup">
						<SignupFormPage />
					</Route>
					<Route path="/products/add">
						<AddProductForm />
					</Route>
					{/* <Route path="/products/:id">
						<ProductDetails />
					</Route> */}
					<Route path="/products/update/:id">
						<UpdateProductForm />
					</Route>
					<Route path="/products/delete/:id">
						<DeleteProductForm />
					</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
