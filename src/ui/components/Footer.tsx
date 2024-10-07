import React from "react";
import Container from "@/ui/components/Container";
import Typography from "@/ui/design-system/Typography";
import Button from "@/ui/design-system/Button";
import { Link } from "react-router-dom";
import { socialNetworks } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray py-10">
      <Container className="">
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            Copyright © {currentYear} | Propulsed by{" "}
            <Link
              to="https://wenceslas-angelo.netlify.app/"
              target="_blank"
              className="underline"
            >
              Wenceslas Angelo
            </Link>
          </Typography>
          <div className="flex items-center gap-2">
            {socialNetworks.map((socialNetwork) => {
              const isGmail = socialNetwork.name.toLowerCase() === "gmail";

              return isGmail ? (
                <a
                  href={`mailto:${socialNetwork.name}`}
                  key={socialNetwork.name}
                >
                  <Button
                    size="small"
                    variant="icon"
                    iconTheme="gray"
                    icon={socialNetwork.icon}
                  />
                </a>
              ) : (
                <Link
                  to={socialNetwork.path}
                  key={socialNetwork.name}
                  target="_blank"
                >
                  <Button
                    size="small"
                    variant="icon"
                    iconTheme="gray"
                    icon={socialNetwork.icon}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
