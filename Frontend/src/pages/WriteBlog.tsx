import AddSvg from "@/assets/svgs/AddSvg";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import { useState } from "react";

function WriteBlog() {
  const [inputTitle, setIntputTitle] = useState<string>("");
  const [inputdesription, setIntputdesription] = useState<string>("");

  return (
    <div>
      <div>
        <Navbar
          name="SHASHI"
          condition={true}
          onClick={() => {
            console.log({ title: inputTitle, description: inputdesription });
            setIntputdesription("");
            setIntputTitle("");
          }}
        />
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
