import React from "react";
import { shallow } from "enzyme";
import Landing from "./Landing";
import NavBar from "./NavBar";
import { findByTestAttr } from "../../../utilities";

describe("Layout Components", () => {
  describe("Landing Component", () => {
    it("Should render without errors", () => {
      const component = shallow(<Landing />);
      const wrapper = findByTestAttr(component, "landinPage");
      expect(wrapper.length).toBe(1);
    });

    it("Should render buttons", () => {
      const component = shallow(<Landing />);
      const button = findByTestAttr(component, "btn-test");
      expect(button.length).toBe(2);
    });
  });

  describe("NavBar component", () => {
    it("Should render without errors", () => {
      const component = shallow(<NavBar />);
      const wrapper = findByTestAttr(component, "navBar-test");
      expect(wrapper.length).toBe(1);
    });
  });
});
