import { Link } from "react-router-dom";

type PropTypes = {
  title: string;
  subtitle: string;
  link: string;
};

export default function Authtitle({ title, subtitle, link }: PropTypes) {
  return (
    <div className="text-center">
      <h1 className=" text-4xl font-bold">{title}</h1>
      <div className=" inline-flex gap-1  text-slate-500 text-sm ">
        <p className=" ">{subtitle}</p>
        <Link to={link} className=" underline">
          {link.slice(1)}
        </Link>
      </div>
    </div>
  );
}
