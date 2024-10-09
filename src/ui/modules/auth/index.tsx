import React from "react";
import Container from "@/ui/components/Container";
import Logo from "@/ui/design-system/Logo";
import Box from "@/ui/design-system/Box";
import AuthTitle from "./AuthTitle";
import AuthForm from "./AuthForm";
import AuthFooter from "./AuthFooter";

type Props = {
  variant: "login" | "register";
};

const Auth = ({ variant }: Props) => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div
        className={`flex justify-center items-center flex-col space-y-2  ${
          variant === "register" ? "order-1" : "order-0"
        } `}
      >
        <Box>
          <Logo />
          <AuthTitle variant={variant} />
          <AuthForm variant={variant} />
          <AuthFooter variant={variant} />
        </Box>
      </div>
      <div className="flex items-center justify-center border-r border-primary-300/40">
        <img
          src={variant === "login" ? "/images/login.png" : "/images/rocket.png"}
          alt={`${variant}-image`}
        />
      </div>
    </Container>
  );
};

export default Auth;
