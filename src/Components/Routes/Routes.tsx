import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";

const Routes_ = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </>
  );
};

export default Routes_;
