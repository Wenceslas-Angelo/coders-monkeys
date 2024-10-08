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
      className={clsx("")}
    />
  );
};

export default Input;
