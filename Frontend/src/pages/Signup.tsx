import Authtitle from "@/components/Authtitle";
import LableInput from "@/components/LabelInput";
import { Quote } from "@/components/Quote";
import SubmitButton from "@/components/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import z from "zod";
import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const SingupSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(4),
});

type FormFields = z.infer<typeof SingupSchema>;

export function Signup() {
  const navigator = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormFields>({ resolver: zodResolver(SingupSchema) });

  const submitForm = handleSubmit(async ({ email, password, username }) => {
    try {
      const response = await axios.post("/api/v1/user/signup", {
        email,
        password,
        username,
      });
      const authData = response.data;
      sessionStorage.setItem("auth_data", authData.token);
      sessionStorage.setItem("auth_username", authData.user.username);
      navigator("/blogs");
      reset();
    } catch (error: unknown) {
      console.log(error);
      if (isAxiosError(error)) {
        if (error.response?.status == 400) {
          return setError("root", {
            message: "You already have an account, Signin",
          });
        }
        return setError("root", { message: "Internal Server Error" });
      }
    }
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
            {errors.root && (
              <>
                <div>
                  <p className=" text-sm text-center  text-red-800">
                    {errors.root.message}
                  </p>
                </div>
              </>
            )}
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
