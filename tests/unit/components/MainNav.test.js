import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("describes the company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Yoms Careers");
  });

  it("displays menu items for navigational menus", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Yoms",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
