import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";

interface LabelInput<T extends FieldValues> {
  name: Path<T>;
  placeholer: string;
  register: UseFormRegister<T>;
  type: string;
  error?: FieldError | undefined;
}

function LabelInput<T extends FieldValues>({
  name,
  placeholer,
  register,
  type,
  error,
}: LabelInput<T>) {
  return (
    <div className="p-2">
      <Label className=" text-lg font-medium">{name}</Label>
      <div className="mt-2">
        <Input type={type} {...register(name)} placeholder={placeholer} />
      </div>
      {error && (
        <>
          {" "}
          <p className=" text-sm mt-1 text-rose-800"> {error?.message}</p>
        </>
      )}
    </div>
  );
}

export default LabelInput;
