import React from "react";
import Seo from "@/ui/components/Seo";
import Button from "@/ui/design-system/Button";
import { TiUserOutline } from "react-icons/ti";

const App = () => {
  return (
    <>
      <Seo title="Coders Monkeys" description="Share your project" />
      <Button icon={TiUserOutline} variant="icon" iconTheme="gray" />
    </>
  );
};

export default App;
