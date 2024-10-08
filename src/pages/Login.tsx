import React from "react";
import Container from "@/ui/components/Container";
import Logo from "@/ui/design-system/Logo";
import AuthTitle from "@/ui/modules/auth/AuthTitle";

const Login = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex justify-center flex-col space-y-2">
        <Logo />
        <AuthTitle variant="login" />
      </div>
      <div className="flex items-center justify-center border-l border-primary-300/40">
        <img src="/images/login.png" />
      </div>
    </Container>
  );
};

export default Login;
