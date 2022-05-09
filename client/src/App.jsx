import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getAccessory } from "./actions/product";
import { getCategories } from "./actions/category";
import { getAllBrands } from "./actions/brand";

import { Main, NotFound, Product, Favorite, Cart, Auth, Admin } from "./pages";
import Create from "./containers/Admin/Product/Create/Create";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccessory());
    dispatch(getCategories());
    dispatch(getAllBrands());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view/product/:id" element={<Product />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin/control" element={<Admin />} />
        <Route path="/admin/control/create" element={<Admin ><Create /></Admin>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
