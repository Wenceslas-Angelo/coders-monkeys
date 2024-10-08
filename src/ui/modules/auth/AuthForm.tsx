import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthFormTypes } from "@/types/AuthFormTypes";
import Input from "@/ui/components/Input";

type Props = {
  variant: "login" | "register";
};

const AuthForm = ({ variant }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<AuthFormTypes>();

  const onSubmit: SubmitHandler<AuthFormTypes> = async (data) => {
    if (variant === "login") {
      console.log(data);
    } else {
      console.log(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="username"
        placeholder="John Doe"
        register={register}
        errors={errors}
      />
    </form>
  );
};

export default AuthForm;
