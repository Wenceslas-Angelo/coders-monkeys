import React from "react";
import Container from "@/ui/components/Container";
import Logo from "@/ui/design-system/Logo";
import AuthTitle from "@/ui/modules/auth/AuthTitle";

const Register = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex items-center justify-center border-r border-primary-300/40">
        <img src="/images/rocket.png" />
      </div>
      <div className="flex justify-center items-center flex-col space-y-2">
        <div>
          <Logo />
          <AuthTitle variant="register" />
        </div>
      </div>
    </Container>
  );
};

export default Register;
