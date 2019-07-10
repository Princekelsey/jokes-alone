import React from "react";
import { shallow } from "enzyme";
import About from "./About";
import { findByTestAttr } from "../../../utilities";
import renderer from "react-test-renderer";

describe("About Components", () => {
  it("Should render without errors", () => {
    const component = shallow(<About />);
    const wrapper = findByTestAttr(component, "abouttest");
    expect(wrapper.length).toBe(1);
  });

  it("Should render image", () => {
    const component = shallow(<About />);
    const wrapper = findByTestAttr(component, "imgtest");
    expect(wrapper.length).toBe(1);
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
