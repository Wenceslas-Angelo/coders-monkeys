import React from "react";
import Seo from "@/ui/components/Seo";
import Layout from "@/ui/components/Layout";
import HeroTop from "@/ui/modules/landing-page/HeroTop";
import Featured from "@/ui/modules/landing-page/Featured";

const LandingPage = () => {
  return (
    <>
      <Seo title="Coders Monkeys" description="Share your project" />

      <Layout>
        <HeroTop />
        <Featured />
      </Layout>
    </>
  );
};

export default LandingPage;
