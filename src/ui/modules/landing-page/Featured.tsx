import React from "react";
import { RxArrowRight } from "react-icons/rx";

import Container from "@/ui/components/Container";
import Typography from "@/ui/design-system/Typography";
import Button from "@/ui/design-system/Button";
import { featuredList } from "@/constants";

const Featured = () => {
  return (
    <section className="bg-gray-200">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 col-span-7 gap-2">
          {featuredList.map((featured) => (
            <div
              key={featured.title}
              className="flex flex-col items-center justify-center bg-white rounded p-7"
            >
              <div className="w-[130px] mb-2">
                <img
                  src={featured.img}
                  alt={`${featured.title} image`}
                  className=""
                />
              </div>
              <Typography
                variant="lead"
                component="h3"
                weight="medium"
                className="text-center mb-2"
              >
                {featured.title}
              </Typography>
              <Typography
                variant="body-base"
                component="p"
                weight="regular"
                theme="gray"
                className="text-center"
              >
                {featured.description}
              </Typography>
            </div>
          ))}
        </div>
        <div className="col-span-5 space-y-6">
          <Typography variant="h2" component="h2">
            The coolest place to become a developer.
          </Typography>
          <Typography variant="body-lg" component="p" theme="gray">
            At Coders Monkeys, we believe that the best way to master coding is
            by getting your hands dirty. Whether you're just starting out or
            leveling up your skills, we've got the tools, the community, and the
            inspiration you need to push your limits. Here, it's not just about
            learning—it's about growing alongside fellow developers, sharing
            your projects, and building something bigger together. Ready to
            become the developer you've always dreamed of? Join the tribe and
            start coding like a pro.
          </Typography>
          <div className="space-x-5 pt-2.5">
            <Button icon={RxArrowRight}>Join Now</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
