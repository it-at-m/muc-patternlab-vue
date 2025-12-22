// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { StorybookConfig } from "@storybook/vue3-vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

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
