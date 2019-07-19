import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("<Button />", () => {
  const wrapper = shallow(<Button>Foo</Button>);

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("returns a button element", () => {
    expect(wrapper.type()).toBe("button");
  });

  it("sets the button type to button by default", () => {
    expect(wrapper.exists('button[type="button"]')).toBe(true);
  });

  it("sets the button type to submit when passed", () => {
    const submitWrapper = shallow(<Button type="submit">Foo</Button>);
    expect(submitWrapper.exists('button[type="submit"]')).toBe(true);
  });

  it("contains any child text", () => {
    expect(wrapper.text()).toBe("Foo");
  });

  it("contains any child element", () => {
    const childWrapper = shallow(
      <Button>
        <span>Bar</span>
      </Button>
    ).find("span");
    expect(childWrapper.exists()).toBe(true);
    expect(childWrapper.text()).toBe("Bar");
  });
});
