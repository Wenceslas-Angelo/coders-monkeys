import React from "react";
import Seo from "@/ui/components/Seo";
import Typography from "./ui/design-system/Typography";

const App = () => {
  return (
    <>
      <Seo title="Coders Monkeys" description="Share your project" />
      <Typography variant="display" theme="gray" component="h1">
        Hello world! this is Coders Monkeys :)
      </Typography>
    </>
  );
};

export default App;
