import { useEffect, useState } from "react";
import axios from "axios";

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

export default function useBlogsBluk() {
  const [data, setData] = useState<DataType[] | null>();
  useEffect(() => {
    async function blogData() {
      const responce = await axios.get("api/v1/blogs/bluk");
      const result = await responce.data;
      setData(result.posts);
    }
    blogData();
  }, []);
  return data;
}
