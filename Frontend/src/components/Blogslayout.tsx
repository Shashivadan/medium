import BlogProfile from "@/components/BlogProfile";
import Bloglayout from "@/components/Bloglayout";
import { Link } from "react-router-dom";

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

type PropType = {
  id: string;
  title: string;
  content: string;
  time: string;
  username: string;
};

export default function Blogslayout({
  id,
  title,
  content,
  time,
  username,
}: PropType) {
  return (
    <>
      <Link to={"/blog/" + id}>
        <div className=" bg-slate-100 p-3 rounded-2xl shadow-sm ">
          <div className=" mb-2 flex gap-2">
            {" "}
            <span>Auhter </span>
            <BlogProfile name={username} />
          </div>
          <div>
            <Bloglayout
              title={title}
              posted={time}
              description={content}
              id={id}
            />
          </div>
        </div>
      </Link>
    </>
  );
}
