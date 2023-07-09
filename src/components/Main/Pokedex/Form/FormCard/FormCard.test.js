import React from "react";
import { shallow } from "enzyme";
import FormCard from "./FormCard";

describe("FormCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
