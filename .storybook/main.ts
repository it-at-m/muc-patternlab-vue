import { StorybookConfig } from "@storybook/vue3-vite";

/**
 * Load Muc-SVG-Sprite and inject it into storybook-Preview.
 */
const fs = require("fs");
const path = require("path");
const mucIconsSvg = fs.readFileSync(
  path.resolve(__dirname, "../public/assets/icons/muc-icons.svg"),
  "utf8"
);
const customIconsSvg = fs.readFileSync(
  path.resolve(__dirname, "../public/assets/icons/custom-icons.svg"),
  "utf8"
);

const config: StorybookConfig = {
  stories: ["../docs/*.mdx", "../src/components/**/*.stories.ts"],
  staticDirs: ["../public", "../docs/images"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  previewBody: (body) => `
    ${body}
    ${mucIconsSvg}
    ${customIconsSvg}
 `,

  core: {
    disableTelemetry: true, // https://storybook.js.org/docs/configure/telemetry
  },
};

export default config;
