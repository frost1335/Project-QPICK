import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccessory } from "./actions/accessory";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccessory());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/api/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
