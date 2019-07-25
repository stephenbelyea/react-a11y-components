import React from "react";
import { storiesOf } from "@storybook/react";
import { Modal, Button } from "../src";

storiesOf("Modal", module).add("Basic", () => (
  <>
    <Modal
      header={<span>Hello there!</span>}
      actions={<Button>Click Me</Button>}
    >
      Modal content
    </Modal>
  </>
));
