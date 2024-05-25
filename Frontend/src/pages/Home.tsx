import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Home() {
  const parentVarient = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const childVarient = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  return (
    <>
      <div className=" h-screen bg-black text-white ">
        <div className="h-full w-full flex  items-center justify-center text-center  ">
          <motion.div
            variants={parentVarient}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1,
            }}
            className=" p-10 md:p-0 md:w-[30%] text-center flex flex-col items-center gap-5"
          >
            <motion.div
              variants={childVarient}
              className=" text-4xl md:text-6xl font-bold"
            >
              Good things come those{" "}
              <em className=" font-thin  font-serif">who wait.</em>
            </motion.div>
            <motion.div
              variants={childVarient}
              className="text-sm  md:w-[70%] font-semibold text-slate-300 "
            >
              Launch your very own waitlist, grow your mailing list all while
              building the hype for launch day.
            </motion.div>
            <div>
              <motion.div variants={childVarient}>
                <Link
                  to={"/signin"}
                  className=" font-semibold px-9 py-2 bg-transparent   border-2 rounded-lg "
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
