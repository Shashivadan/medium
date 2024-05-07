import { Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Background from "./components/Background";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <Background>
        <Routes>
          <Route path={"/signup"} element={<Signup />}></Route>
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/blog/:id"} element={<Blog />} />
          <Route path={"/blogs"} element={<Blogs />} />
        </Routes>
      </Background>
    </>
  );
}

export default App;
