import React from "react";
import Seo from "@/ui/components/Seo";
import Button from "@/ui/design-system/Button";
import Avatar from "./ui/design-system/Avatar";

const App = () => {
  return (
    <>
      <Seo title="Coders Monkeys" description="Share your project" />
      <Button isLoading variant="accent" size="small">
        Click me
      </Button>

      <Avatar size="small" src="/images/avatar.jpg" alt="wenci avatar" />
    </>
  );
};

export default App;
