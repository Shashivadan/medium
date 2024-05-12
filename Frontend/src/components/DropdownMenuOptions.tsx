import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export default function DropdownMenuOptions() {
  const navigator = useNavigate();
  return (
    <DropdownMenu>
      {" "}
      <DropdownMenuTrigger asChild>
        <Button variant="outline">menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => navigator("/write")}>
          write
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigator("/blogs")}>
          {" "}
          Blogs
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigator("/signin")}>
          {" "}
          logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
