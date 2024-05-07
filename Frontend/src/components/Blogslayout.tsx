import BlogProfile from "@/components/BlogProfile";
import Bloglayout from "@/components/Bloglayout";
import { Link } from "react-router-dom";

export default function Blogslayout() {
  return (
    <>
      <Link to="/blog/bkajflk">
        <div className=" bg-slate-100 p-3 rounded-2xl shadow-sm ">
          <div className=" mb-2 flex gap-2">
            {" "}
            <span>Auhter </span>
            <BlogProfile name={"shashi"} />
          </div>
          <div className="">
            <Bloglayout
              title={"Lorem adfjak"}
              posted="agt 12"
              description="I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.              "
            />
          </div>
        </div>
      </Link>
    </>
  );
}
