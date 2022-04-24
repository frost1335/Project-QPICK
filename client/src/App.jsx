import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./pages/Main/Main";
import { getAccessory } from "./actions/accessory";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccessory());
  }, []);

  return (
    <>
      <Main></Main>
    </>
  );
};

export default App;
