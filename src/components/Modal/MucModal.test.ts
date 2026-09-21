import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import MucModal from "./MucModal.vue";

describe("MucModal.vue", () => {
  const showModal = vi.fn();
  const close = vi.fn();

  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = showModal;
    HTMLDialogElement.prototype.close = close;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders title and body slots", () => {
    const wrapper = mount(MucModal, {
      slots: {
        title: "Dialog title",
        body: "<p>Dialog body</p>",
      },
    });

    const dialog = wrapper.find("dialog");
    expect(dialog.attributes("aria-labelledby")).toBe("modalLabel");
    expect(wrapper.find("#modalLabel").text()).toBe("Dialog title");
    expect(wrapper.find(".modal-body p").text()).toBe("Dialog body");
    expect(wrapper.find(".modal-footer").exists()).toBe(false);
    expect(wrapper.find(".muc-dialog-actions").exists()).toBe(false);
  });

  it("renders buttons and actions slots", () => {
    const wrapper = mount(MucModal, {
      slots: {
        buttons: "<button class='confirm'>OK</button>",
        actions: "<a class='action'>More</a>",
      },
    });

    expect(wrapper.find(".modal-footer .confirm").text()).toBe("OK");
    expect(wrapper.find(".muc-dialog-actions .action").text()).toBe("More");
  });

  it("does not open the dialog by default", () => {
    mount(MucModal);

    expect(showModal).not.toHaveBeenCalled();
  });

  it("opens the dialog on mount when open is set", () => {
    mount(MucModal, { props: { open: true } });

    expect(showModal).toHaveBeenCalledTimes(1);
  });

  it("opens and closes the dialog when open changes", async () => {
    const wrapper = mount(MucModal);

    await wrapper.setProps({ open: true });
    expect(showModal).toHaveBeenCalledTimes(1);

    await wrapper.setProps({ open: false });
    expect(close).toHaveBeenCalledTimes(1);
  });

  it("emits close when the close button is clicked", async () => {
    const wrapper = mount(MucModal, { props: { open: true } });

    const closeButton = wrapper.find(".modal-button-close");
    expect(closeButton.attributes("aria-label")).toBe("Dialog schliessen");

    await closeButton.trigger("click");

    expect(wrapper.emitted("close")).toHaveLength(1);
  });
});
