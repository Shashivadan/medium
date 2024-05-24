import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function MenuDrawer() {
  const navigate = useNavigate();
  return (
    <div>
      <Drawer>
        <DrawerTrigger>menu</DrawerTrigger>

        <DrawerContent className=" flex flex-col gap-3 px-3">
          <Button onClick={() => navigate("/write")} variant={"outline"}>
            write
          </Button>
          <Button onClick={() => navigate("/blogs")} variant={"outline"}>
            blogs
          </Button>
          <Button onClick={() => navigate("/signin")} variant={"outline"}>
            logout
          </Button>
          <DrawerClose>
            <Button variant={"outline"}>cancel</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
