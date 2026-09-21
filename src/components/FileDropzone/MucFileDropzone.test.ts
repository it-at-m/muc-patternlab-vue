import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";

import MucFileDropzone from "./MucFileDropzone.vue";

const MB = 1024 * 1024;

const createFile = (name: string, size: number) => {
  const file = new File([""], name);
  Object.defineProperty(file, "size", { value: size });
  return file;
};

const dataTransfer = (files: File[]) => ({
  files,
  items: files.map(() => ({ kind: "file" })),
});

const mountDropzone = (props: Record<string, unknown> = {}) =>
  mount(MucFileDropzone, {
    props: {
      buttonText: "Upload file",
      ...props,
    },
    attachTo: document.body,
  });

describe("MucFileDropzone.vue", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = "";
  });

  it("renders button text and additional information", () => {
    const wrapper = mountDropzone({ additionalInformation: "Max. 10 MB" });

    expect(wrapper.find("button").text()).toBe("Upload file");
    expect(wrapper.find(".m-hint").text()).toBe("Max. 10 MB");
    expect(wrapper.find(".drop-zone").classes()).toContain("is-not-disabled");
    expect(wrapper.find("label").exists()).toBe(false);
    expect(wrapper.find(".m-error-message").exists()).toBe(false);
  });

  it("renders an optional label", () => {
    const wrapper = mountDropzone({ label: "Documents" });

    const label = wrapper.find("label");
    expect(label.text()).toBe("Documents");
    expect(label.classes()).toContain("m-label--optional");
    expect(wrapper.find(".drop-zone .visually-hidden").text()).toBe(
      "Documents"
    );
  });

  it("renders a required label", () => {
    const wrapper = mountDropzone({ label: "Documents", required: true });

    expect(wrapper.find("label").classes()).not.toContain(
      "m-label--optional"
    );
  });

  it("emits dropped files", async () => {
    const wrapper = mountDropzone();
    const files = [createFile("a.pdf", MB), createFile("b.pdf", MB)];

    await wrapper
      .find(".drop-zone")
      .trigger("drop", { dataTransfer: dataTransfer(files) });

    expect(wrapper.emitted("files")).toEqual([[files]]);
  });

  it("highlights the drop zone while dragging over it", async () => {
    const wrapper = mountDropzone();
    const dropZone = wrapper.find(".drop-zone");

    await dropZone.trigger("dragover", {
      dataTransfer: dataTransfer([createFile("a.pdf", MB)]),
    });
    expect(dropZone.classes()).toContain("is-dragover");

    await dropZone.trigger("dragleave");
    expect(dropZone.classes()).not.toContain("is-dragover");
  });

  it("ignores drops and drags when disabled", async () => {
    const wrapper = mountDropzone({ disabled: true });
    const dropZone = wrapper.find(".drop-zone");
    const files = [createFile("a.pdf", MB)];

    expect(dropZone.classes()).not.toContain("is-not-disabled");
    expect(wrapper.find("button").attributes("aria-disabled")).toBe("true");

    await dropZone.trigger("dragover", { dataTransfer: dataTransfer(files) });
    await dropZone.trigger("drop", { dataTransfer: dataTransfer(files) });

    expect(dropZone.classes()).not.toContain("is-dragover");
    expect(wrapper.emitted("files")).toBeUndefined();
  });

  it("warns about too many files in single mode", async () => {
    const wrapper = mountDropzone({
      multiple: false,
      invalidAmountWarning: "Only one file allowed",
    });
    const dropZone = wrapper.find(".drop-zone");
    const files = [createFile("a.pdf", MB), createFile("b.pdf", MB)];

    await dropZone.trigger("dragover", { dataTransfer: dataTransfer(files) });

    expect(dropZone.classes()).not.toContain("is-dragover");
    expect(wrapper.find(".m-error-message").text()).toContain(
      "Only one file allowed"
    );

    await dropZone.trigger("drop", { dataTransfer: dataTransfer(files) });

    expect(wrapper.emitted("files")).toBeUndefined();
    expect(wrapper.find(".m-error-message").exists()).toBe(false);
  });

  it("warns about files exceeding the max file size", async () => {
    const wrapper = mountDropzone({
      maxFileSize: 1,
      maxFileSizeWarning: "File too large",
    });

    await wrapper.find(".drop-zone").trigger("drop", {
      dataTransfer: dataTransfer([createFile("big.pdf", 2 * MB)]),
    });

    expect(wrapper.emitted("files")).toBeUndefined();
    expect(wrapper.emitted("warning")).toHaveLength(1);
    expect(wrapper.find(".m-error-message").text()).toContain(
      "File too large"
    );
  });

  it("warns about files exceeding the max total file size", async () => {
    const wrapper = mountDropzone({
      maxFileSize: 2,
      maxTotalFileSize: 3,
      maxTotalFileSizeWarning: "Files too large in total",
    });

    await wrapper.find(".drop-zone").trigger("drop", {
      dataTransfer: dataTransfer([
        createFile("a.pdf", 2 * MB),
        createFile("b.pdf", 2 * MB),
      ]),
    });

    expect(wrapper.emitted("files")).toBeUndefined();
    expect(wrapper.emitted("warning")).toHaveLength(1);
    expect(wrapper.find(".m-error-message").text()).toContain(
      "Files too large in total"
    );
  });

  it("clears warnings via the exposed clearWarnings", async () => {
    const wrapper = mountDropzone({
      maxFileSize: 1,
      maxFileSizeWarning: "File too large",
    });

    await wrapper.find(".drop-zone").trigger("drop", {
      dataTransfer: dataTransfer([createFile("big.pdf", 2 * MB)]),
    });
    expect(wrapper.find(".m-error-message").exists()).toBe(true);

    (wrapper.vm as unknown as { clearWarnings: () => void }).clearWarnings();
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".m-error-message").exists()).toBe(false);
  });

  it("opens the file explorer on click, enter and space", async () => {
    const click = vi
      .spyOn(HTMLInputElement.prototype, "click")
      .mockImplementation(() => {});
    const wrapper = mountDropzone();
    const dropZone = wrapper.find(".drop-zone");

    await dropZone.trigger("click");
    await dropZone.trigger("keydown.enter");
    await dropZone.trigger("keydown.space");

    expect(click).toHaveBeenCalledTimes(3);
  });

  it("does not open the file explorer when disabled", async () => {
    const click = vi
      .spyOn(HTMLInputElement.prototype, "click")
      .mockImplementation(() => {});
    const wrapper = mountDropzone({ disabled: true });

    await wrapper.find(".drop-zone").trigger("click");

    expect(click).not.toHaveBeenCalled();
  });

  it("emits files chosen in the file explorer", async () => {
    let fileInput: HTMLInputElement | undefined;
    vi.spyOn(HTMLInputElement.prototype, "click").mockImplementation(
      function (this: HTMLInputElement) {
        fileInput = this;
      }
    );
    const wrapper = mountDropzone({ multiple: false });
    const files = [createFile("a.pdf", MB)];

    await wrapper.find(".drop-zone").trigger("click");

    expect(fileInput?.type).toBe("file");
    expect(fileInput?.multiple).toBe(false);

    fileInput?.onchange?.({ target: { files } } as unknown as Event);

    expect(wrapper.emitted("files")).toEqual([[files]]);
  });
});
