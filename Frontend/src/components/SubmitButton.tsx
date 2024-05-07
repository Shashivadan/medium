import { MouseEvent } from "react";
import { Button } from "./ui/button";

type ButtonType = {
  name: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function SubmitButton({ name, onClick }: ButtonType) {
  return (
    <Button className="w-full font-bold h-9 " type="submit" onClick={onClick}>
      {" "}
      {name}
    </Button>
  );
}

export default SubmitButton;
