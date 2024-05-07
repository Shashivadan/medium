import Authtitle from "@/components/Authtitle";
import LableInput from "@/components/LabelInput";
import { Quote } from "@/components/Quote";
import SubmitButton from "@/components/SubmitButton";

import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import z from "zod";

const signinSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(4),
});

type FormFields = z.infer<typeof signinSchema>;

export default function Signin() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormFields>({ resolver: zodResolver(signinSchema) });

  const submitForm = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <div className=" h-screen flex flex-col items-center justify-center ">
          <Authtitle
            title="Welcome back"
            link={"/signup"}
            subtitle="Don't have an account"
          />
          <form onSubmit={submitForm} className=" w-[90%]  md:max-w-[50%]">
            <LableInput
              type={"text"}
              name={"email"}
              register={register}
              placeholer={"example@gmail.com"}
              error={errors.email}
            />
            <LableInput
              type={"password"}
              name={"password"}
              register={register}
              placeholer={"example@1234"}
              error={errors.password}
            />
            <div className=" p-2">
              <SubmitButton name={"Signin"} />
            </div>
          </form>
        </div>
        <div className="hidden md:block">
          <Quote />
        </div>
      </div>
    </>
  );
}
