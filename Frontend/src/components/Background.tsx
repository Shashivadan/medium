import { PropsWithChildren } from "react";

function Background({ children }: PropsWithChildren) {
  return <div className=" bg-white">{children}</div>;
}

export default Background;
