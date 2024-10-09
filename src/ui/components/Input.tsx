import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import clsx from "clsx";
import { AuthFormTypes } from "@/types/AuthFormTypes";

type Props = {
  type: "text" | "email" | "password";
  id: "email" | "password" | "username";
  placeholder: string;
  register: UseFormRegister<AuthFormTypes>;
  errors: FieldErrors<AuthFormTypes>;
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
        "w-full p-4 font-light border rounded focus:outline-none focus:ring-1",
        errors[id]
          ? "focus:ring-alert-danger placeholder-alert-danger border-alert-danger text-alert-danger"
          : "focus:ring-primary placeholder-gray-600 border-gray-400"
      )}
    />
  );
};

export default Input;
