import { Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Background from "./components/Background";
import Blogs from "./pages/Blogs";
import WriteBlog from "./pages/WriteBlog";
import axios from "axios";
//@ts-ignore
axios.defaults.baseURL = "http://localhost:8787";

if (window.sessionStorage.getItem("token")) {
  axios.defaults.headers["token"] = window.sessionStorage.getItem("token");
}

function App() {
  return (
    <>
      <Background>
        <Routes>
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/blog/:id"} element={<Blog />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/write"} element={<WriteBlog />} />
        </Routes>
      </Background>
    </>
  );
}

export default App;
