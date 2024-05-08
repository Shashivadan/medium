import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { MouseEvent, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
type PropsTypes = {
  name: string;
  condition?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Navbar({
  name,
  condition = false,
  onClick,
}: PropsTypes) {
  return (
    <>
      <div className=" py-5 flex justify-between">
        <div className="flex gap-2">
          <div className="w-12">
            <img className="" src="https://logodix.com/logo/1597047.gif" />
          </div>
          <div className=" font-semibold">Draft in Kirags</div>
        </div>
        <div className="flex gap-2 items-center">
          {condition ? (
            <button
              onClick={onClick}
              className=" bg-green-600 text-white px-2 py-1 rounded-full"
            >
              Publish
            </button>
          ) : (
            <>
              <Link
                to={"/write"}
                className=" text-slate-800  font-mono text-center font-bold"
              >
                Write
              </Link>
            </>
          )}
          <div>
            <div>
              <Avatar className={` bg-slate-300  p-2 rounded-full `}>
                <AvatarFallback>
                  {name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
