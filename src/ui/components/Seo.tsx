import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
};

const Seo = ({ title, description }: Props) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  );
};

export default Seo;
