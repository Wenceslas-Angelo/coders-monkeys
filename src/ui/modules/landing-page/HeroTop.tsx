import React from "react";
import Container from "@/ui/components/Container";
import Typography from "@/ui/design-system/Typography";
import Button from "@/ui/design-system/Button";

const HeroTop = () => {
  return (
    <Container className="py-20 grid grid-cols-2">
      <div className="w-full space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          Join coders monkeys
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-xl"
        >
          Here, we don’t stress, we just code like beasts! Join our tribe of
          coders monkeys. Share your projects, get inspired by others, and most
          of all, make some developer friends along the way.
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button>Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/svg/creative_startup_rocket.svg"
          alt="rocket illustration"
          width={811}
          height={593}
          className="w-[400px]"
        />
      </div>
    </Container>
  );
};

export default HeroTop;
