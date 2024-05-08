import BlogProfile from "@/components/BlogProfile";
import Bloglayout from "@/components/Bloglayout";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

export default function Blog() {
  return (
    <>
      <div className=" ">
        <div className="">
          <Navbar name="ahsdfkl" />
        </div>
        <div className="px-7 md:px-0">
          <div>
            <Breadcrumb crumb="Blog" />
          </div>
          <div className="grid gap-3  md:grid-cols-4 ">
            <div className="col-span-3 ">
              <Bloglayout
                title={"Lorem adfjak"}
                posted="agt 12"
                description="I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.              "
                condition={true}
              />
            </div>
            <div className="px-2 hidden md:block">
              <div className=" font-semibold ">Author</div>
              <div className=" mt-2">
                {" "}
                <BlogProfile
                  name={"shashi"}
                  bio={"shashi vadan"}
                  condition={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
