import Blogslayout from "@/components/Blogslayout";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";

function Blogs() {
  return (
    <div>
      <div className="">
        <Navbar name="Shree" />
      </div>
      <div className="px-7 md:px-0">
        <div className="">
          <Breadcrumb crumb="Blogs" />
        </div>
        <div className=" flex flex-col gap-2">
          <Blogslayout />
          <Blogslayout />
          <Blogslayout />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
