import {} from "jest";
import Vue from "vue";
import { shallow } from "vue-test-utils";
import Card from "../components/Card";

describe("Card component", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(Card, {
      propsData: {
        person: {
          id: 2,
          first_name: "Alex",
          last_name: "Jones"
        }
      }
    });
  });

  it("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
