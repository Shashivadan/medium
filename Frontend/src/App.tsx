import { Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import WriteBlog from "./pages/WriteBlog";
import axios from "axios";
import Home from "./pages/Home";
//@ts-ignore
axios.defaults.baseURL = " https://backend.shashivadan99.workers.dev";

if (window.sessionStorage.getItem("token")) {
  axios.defaults.headers["token"] = window.sessionStorage.getItem("token");
}

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/blog/:id"} element={<Blog />} />
        <Route path={"/blogs"} element={<Blogs />} />
        <Route path={"/write"} element={<WriteBlog />} />
      </Routes>
    </>
  );
}

export default App;
