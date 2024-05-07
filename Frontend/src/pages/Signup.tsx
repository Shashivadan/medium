import Authtitle from "@/components/Authtitle";
import LableInput from "@/components/LabelInput";
import { Quote } from "@/components/Quote";
import SubmitButton from "@/components/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import z from "zod";

const SingupSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(4),
});

type FormFields = z.infer<typeof SingupSchema>;

export function Signup() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormFields>({ resolver: zodResolver(SingupSchema) });

  const submitForm = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <div className=" h-screen flex flex-col items-center justify-center ">
          <Authtitle
            title="Create an account"
            link={"/signin"}
            subtitle="Already have an account"
          />
          <form onSubmit={submitForm} className=" w-[90%]  md:max-w-[50%]">
            <LableInput
              type={"text"}
              name={"username"}
              register={register}
              placeholer={"Enter your username"}
              error={errors.username}
            />
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
              <SubmitButton name={"SignUp"} />
            </div>
          </form>
        </div>
        <div className=" hidden  md:block">
          <Quote />
        </div>
      </div>
    </>
  );
}
<Quote />;
