import Typography from "@/ui/design-system/Typography";
import React from "react";

type Props = {
  variant: "login" | "register";
};

const AuthTitle = ({ variant }: Props) => {
  return (
    <div className="space-y-2">
      <Typography component="h1" variant="h4">
        {variant === "login" ? "Login to your account" : "Create your account"}
      </Typography>
    </div>
  );
};

export default AuthTitle;
