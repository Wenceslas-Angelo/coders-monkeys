import React from "react";
import Seo from "@/ui/components/Seo";
import Button from "@/ui/design-system/Button";

const App = () => {
  return (
    <>
      <Seo title="Coders Monkeys" description="Share your project" />
      <Button isLoading variant="accent" size="small">
        Click me
      </Button>
    </>
  );
};

export default App;
