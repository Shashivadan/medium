import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className=" h-screen bg-black text-white ">
        <div className="h-full w-full flex  items-center justify-center text-center  ">
          <div className="w-[30%] text-center flex flex-col items-center gap-5">
            <div className="text-6xl font-bold">
              Good things come those{" "}
              <em className=" font-thin  font-serif">who wait.</em>
            </div>
            <div className="  w-[70%] font-semibold text-slate-300 ">
              Launch your very own waitlist, grow your mailing list all while
              building the hype for launch day.
            </div>
            <div>
              <Link
                to={"/signin"}
                className=" font-semibold px-9 py-2 bg-transparent   border-2 rounded-lg "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
