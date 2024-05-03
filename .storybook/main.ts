import {StorybookConfig} from "@storybook/vue3-vite";

/**
 * Load Muc-SVG-Sprite and inject it into storybook-Preview.
 */
const fs = require('fs')
const path = require('path')
const mucIconsSvg = fs.readFileSync(path.resolve(__dirname, '../public/assets/temporary/muc-icons.svg'), 'utf8')

const config: StorybookConfig = {
    stories: ['../src/components/**/*.stories.ts'],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        '@storybook/addon-a11y',
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    previewBody: (body) => `
    ${body}
    ${mucIconsSvg}
 `,
    docs: {
        autodocs: "tag",
    },
};

export default config;
