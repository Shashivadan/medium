import { PropsWithChildren } from "react";

function Background({ children }: PropsWithChildren) {
  return (
    <div className=" p-4 md:p-0 bg-white md:max-w-screen-xl m-auto md:h-screen">
      {children}
    </div>
  );
}

export default Background;
