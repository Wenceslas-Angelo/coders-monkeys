import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthFormTypes } from "@/types/AuthFormTypes";
import Input from "@/ui/components/Input";
import Button from "@/ui/design-system/Button";

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
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4 pb-5 space-y-4">
      {variant === "register" ? (
        <Input
          type="text"
          id="username"
          placeholder="John Doe"
          register={register}
          errors={errors}
        />
      ) : null}
      <Input
        type="email"
        id="email"
        placeholder="JohnDoe@gmail.com"
        register={register}
        errors={errors}
      />
      <Input
        type="password"
        id="password"
        placeholder="Your password"
        register={register}
        errors={errors}
      />
      <Button type="submit" className="w-full">
        {variant === "login" ? "Login" : "Register"}
      </Button>
    </form>
  );
};

export default AuthForm;
