import AboutView from "@/views/AboutView.vue"
import { shallowMount } from "@vue/test-utils"

describe("AboutView.vue", () => {
  test("renders inner heading", () => {
    const wrapper = shallowMount(AboutView);

    expect(wrapper.text()).toContain("About Music Project");
  })
});