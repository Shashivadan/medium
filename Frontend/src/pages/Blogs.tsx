import Blogslayout from "@/components/Blogslayout";

function Blogs() {
  return (
    <div className=" md:max-w-screen-xl m-auto md:h-screen">
      <div className=" h-20 "></div>
      <div className="">
        <h3 className=" p-2 font-semibold  text-slate-600">Blogs</h3>
      </div>
      <div className=" flex flex-col gap-2">
        <Blogslayout />
        <Blogslayout />
        <Blogslayout />
      </div>
    </div>
  );
}

export default Blogs;
