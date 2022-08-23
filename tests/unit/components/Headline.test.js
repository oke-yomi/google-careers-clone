import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import Headline from "@/components/Headline";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  // NOTE: beforeEach and afterEach is written to fix DRY method for each test, but in cases of long tests, it would be easier to repeat some of your code for convenience

  it("displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");

    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consistent interval", () => {
    // jest.useFakeTimers("legacy"); --- runs before Headline is mounted

    mount(Headline);
    expect(setInterval).toHaveBeenCalled();

    // jest.useRealTimers(); --- after each test
  });

  it("swaps action verb after first Interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();

    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();

    expect(clearInterval).toHaveBeenCalled();
  });
});
