import BlogProfile from "@/components/BlogProfile";
import Bloglayout from "@/components/Bloglayout";

export default function Blog() {
  return (
    <>
      <div className=" md:max-w-screen-xl m-auto md:h-screen">
        <div className=" h-20 "></div>
        <div>
          <h3 className=" p-2 font-semibold  text-slate-600">Blog</h3>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <Bloglayout
              title={"Lorem adfjak"}
              posted="agt 12"
              description="I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.              "
              condition={true}
            />
          </div>
          <div>
            <div className=" font-semibold ">Author</div>
            <div>
              {" "}
              <BlogProfile name={"shashi"} bio={"shashi vadan"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
