import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { MouseEventHandler, useEffect, useState } from "react";
import DropdownMenuOptions from "./DropdownMenuOptions";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
type PropsTypes = {
  condition?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Navbar({ condition = false, onClick }: PropsTypes) {
  const [name, setname] = useState("");
  useEffect(() => {
    setname(JSON.stringify(localStorage.getItem("auth_username")));
  }, []);

  return (
    <>
      <div className=" py-5 flex justify-between">
        <div className="flex gap-2">
          <Link to={"/blogs"}>
            <div className="w-12">
              <img className="" src="https://logodix.com/logo/1597047.gif" />
            </div>
          </Link>
          <div className=" font-semibold">Draft in Kirags</div>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className=" hidden md:block">
            <DropdownMenuOptions />
          </div>
          <div className=" md:hidden">
            <MenuDrawer />
          </div>
          {condition && <Button onClick={onClick}>Publish</Button>}
          <div>
            <div>
              <Avatar className={` bg-slate-300  p-2 rounded-full `}>
                <AvatarFallback>
                  {name.slice(1, 3).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
