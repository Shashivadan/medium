import Blogslayout from "@/components/Blogslayout";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import Blogsloader from "@/components/Blogsloader";
import useBlogsBluk from "@/hooks/useBlogsBluk";
import Background from "@/components/Background";

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

function Blogs() {
  const data = useBlogsBluk();
  return (
    <Background>
      <div>
        <div className="">
          <Navbar />
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
                        username={item.user.username}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="">
                  <Blogsloader />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Blogs;
