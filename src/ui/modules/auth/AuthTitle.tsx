import Typography from "@/ui/design-system/Typography";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  variant: "login" | "register";
};

const AuthTitle = ({ variant }: Props) => {
  return (
    <div className="space-y-2">
      <Typography component="h1" variant="h4">
        {variant === "login" ? "Login to your account" : "Create your account"}
      </Typography>
      <div>
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
    </div>
  );
};

export default AuthTitle;
