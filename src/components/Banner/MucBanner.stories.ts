import MucBanner from "./MucBanner.vue";

export default {
  component: MucBanner,
  title: "MucBanner",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: `A banner-component used for single-line informations. Available in multiple types.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-banner)
`,
      },
    },
  },
};

export const Default = {
  args: {
    default: "Hi, I'm an Info-Banner!",
    type: "info",
  },
};

export const Success = {
  args: {
    default: "Hi, I'm a Success-Banner!",
    type: "success",
  },
};

export const Warning = {
  args: {
    default: "Hi, I'm a Warning-Banner!",
    type: "warning",
  },
};

export const Emergency = {
  args: {
    default: "Hi, I'm an Emergency-Banner!",
    type: "emergency",
  },
};
