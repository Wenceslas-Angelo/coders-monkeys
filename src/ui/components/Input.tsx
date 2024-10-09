import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import clsx from "clsx";
import { AuthFormTypes } from "@/types/AuthFormTypes";

type Props = {
  type: "text" | "email" | "password";
  id: "email" | "password" | "username";
  placeholder: string;
  register: UseFormRegister<AuthFormTypes>;
  errors: FieldErrors;
};

const Input = ({ type, id, placeholder, register, errors }: Props) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      {...register(id, {
        required: true,
      })}
      className={clsx(
        "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
      )}
    />
  );
};

export default Input;
