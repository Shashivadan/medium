import BlogProfile from "@/components/BlogProfile";
import Bloglayout from "@/components/Bloglayout";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

type DataType = {
  content: string;
  id: string;
  published: string;
  title: string;
  createdAt: string;
  user: {
    username: string;
    id: string;
  };
};

export default function Blog() {
  const [data, setData] = useState<DataType | null>();
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("api/v1/blog/" + id);
        const result = response.data;
        setData(result.post);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          throw new Error("some thing went worngs");
        }
        console.log("Error :", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96">
        <div className="">
          <Navbar />
        </div>
        <div className="px-7 md:px-0">
          <div>
            <Breadcrumb crumb="Blog" />
          </div>
          <div className="grid gap-3  md:grid-cols-4 ">
            {data && (
              <>
                <div className="col-span-3 ">
                  <Bloglayout
                    title={data?.title}
                    posted={data?.createdAt}
                    description={data?.content}
                    condition={true}
                    id={data?.id}
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
