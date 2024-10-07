import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "./Container";
import Logo from "@/ui/design-system/Logo";
import Typography from "@/ui/design-system/Typography";
import Button from "@/ui/design-system/Button";

import { navLinks } from "@/constants";

// type Props = {}

const Navigation = () => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-2">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo size="small" />
          <div className="flex flex-col">
            <div className="text-gray font-extrabold text-[24px]">
              Coders Monkeys
            </div>
            <Typography variant="caption4" theme="gray" component="span">
              find inspiration and receive feedback
            </Typography>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-3"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : ""
                }
              >
                {link.label}
              </NavLink>
            ))}
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small">Login</Button>
            <Button size="small" variant="secondary">
              Register
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
