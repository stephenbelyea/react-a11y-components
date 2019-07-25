import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src";

storiesOf("Button", module).add("With text", () => (
  <>
    <Button>Hollow</Button> <Button solid>Solid</Button>
  </>
));
