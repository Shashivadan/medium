import AddSvg from "@/assets/svgs/AddSvg";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WriteBlog() {
  const [inputTitle, setIntputTitle] = useState<string>("");
  const [inputdesription, setIntputdesription] = useState<string>("");
  const navigate = useNavigate();

  async function handlePost() {
    try {
      const response = await axios.post(
        "/api/v1/blog",
        {
          title: inputTitle,
          content: inputdesription,
        },
        {
          headers: {
            token: sessionStorage.getItem("auth_data"),
          },
        }
      );
      if (response) {
        return navigate("/blog/" + response?.data?.post.id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <Navbar condition={true} onClick={handlePost} />
      </div>
      <div>
        <Breadcrumb crumb="Write" />
      </div>
      <div className="font-serif">
        <div className=" flex items-center gap-2  text-slate-600 ">
          <div className=" min-w-28 border-r-[1px] border-r-slate-300">
            <AddSvg />
          </div>
          <input
            value={inputTitle}
            onChange={(e) => setIntputTitle(e.target.value)}
            placeholder="Title"
            className=" border-none shadow-none text-5xl focus:outline-none w-full"
          ></input>
        </div>
        <div>
          <textarea
            value={inputdesription}
            onChange={(e) => setIntputdesription(e.target.value)}
            placeholder="Tell Your Story"
            className=" h-[43rem] md:ml-28 mt-2 focus:outline-none text-slate-600 w-full resize-none text-xl  p-2 rounded-md shadow-sm"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default WriteBlog;
