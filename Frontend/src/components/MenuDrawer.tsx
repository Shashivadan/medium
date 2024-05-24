import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

function MenuDrawer() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>menu</DrawerTrigger>

        <DrawerContent className=" flex flex-col gap-3 px-3">
          <Button variant={"outline"}>write</Button>
          <Button variant={"outline"}>blogs</Button>
          <Button variant={"outline"}>logout</Button>
          <DrawerClose>
            <Button variant={"outline"}>cancel</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
