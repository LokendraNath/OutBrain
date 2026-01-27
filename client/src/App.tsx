import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
