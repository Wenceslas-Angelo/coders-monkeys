import React from "react";
import { Link } from "react-router-dom";
import Typography from "@/ui/design-system/Typography";

type Props = {
  variant: "login" | "register";
};

const AuthFooter = ({ variant }: Props) => {
  return (
    <div className="text-center">
      <Typography component="span" variant="caption2" theme="gray">
        {variant === "login"
          ? "Don't have an account ? "
          : "Already have an account ? "}
      </Typography>
      <Link
        to={variant === "login" ? "/register" : "/login"}
        className="text-primary"
      >
        {variant === "login" ? "Register" : "Login"}
      </Link>
    </div>
  );
};

export default AuthFooter;
