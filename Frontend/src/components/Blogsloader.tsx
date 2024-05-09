import { Skeleton } from "./ui/skeleton";

function Blogsloader() {
  return (
    <>
      <div className="flex items-center flex-col gap-2 ">
        <Skeleton className=" md:h-[9rem]  w-[80rem] " />
        <Skeleton className=" md:h-[9rem]  w-[80rem] " />
        <Skeleton className=" md:h-[9rem]  w-[80rem] " />
        <Skeleton className=" md:h-[9rem]  w-[80rem] " />
        <Skeleton className=" md:h-[9rem]  w-[80rem] " />
      </div>
    </>
  );
}

export default Blogsloader;
