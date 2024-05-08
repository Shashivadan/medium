import Blogslayout from "@/components/Blogslayout";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

// authorId
// :
// "645f917e-7606-4c01-b5bf-4a4ef88e93c7"
// content
// :
// "akdjlfa afjakjf akfjd flllajf dlfjladjlf djjdlfajjdfljal jafdhlka jalkfdhfl "
// createdAt
// :
// "2024-05-04T16:24:38.055Z"
// id
// :
// "1c3a1f0e-9246-48bb-8285-e1227a7fbbb2"
// published
// :
// false
// title
// :
// "new react version1"

type DataType = {
  authorId: string;
  content: string;
  id: string;
  published: string;
  title: string;
  createdAt: string;
};

function Blogs() {
  const [progress, setProgress] = useState(22);
  const [data, setData] = useState<DataType[] | null>();

  useEffect(() => {
    async function blogData() {
      setProgress(0);
      const responce = await axios.get("api/v1/blogs/bluk");
      const result = await responce.data;
      setData(result.posts);
      setProgress(100);
    }
    blogData();
  }, []);
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
          {data ? (
            <>
              {data?.map((item: DataType) => {
                return (
                  <div key={item.id}>
                    <Blogslayout
                      id={item.id}
                      time={item.createdAt}
                      title={item.title}
                      content={item.content}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="  bg-slate-700 p-2 flex items-center justify-center">
                <Progress
                  value={progress}
                  className=" w-60 bg-white p-2 text-stone-900"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
