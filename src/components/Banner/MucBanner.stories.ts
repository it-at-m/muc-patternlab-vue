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
        component: `A banner-component used for informations. Available in multiple types.

Supports an optional \`header\` slot, a light emergency style (\`emergency-light\`), and an optional left accent border (\`leftBorder\`).

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-banner)
`,
      },
    },
  },
};

export const Default = {
  args: {
    default: "Hi, I'm an Info-Banner!",
    variant: "content",
    type: "info",
  },
};

export const Success = {
  args: {
    default: "Hi, I'm a Success-Banner!",
    variant: "content",
    type: "success",
  },
};

export const Warning = {
  args: {
    default: "Hi, I'm a Warning-Banner!",
    variant: "content",
    type: "warning",
  },
};

export const Emergency = {
  args: {
    default: "Hi, I'm an Emergency-Banner!",
    variant: "content",
    type: "emergency",
  },
};

export const EmergencyLight = {
  args: {
    variant: "content",
    type: "emergency-light",
    leftBorder: true,
  },
  render: (args: Record<string, unknown>) => ({
    components: { MucBanner },
    setup() {
      return { args };
    },
    template: `
      <muc-banner
        :variant="args.variant"
        :type="args.type"
        :left-border="args.leftBorder"
      >
        <template #header>Hi, I'm an Emergency-Light-Banner!</template>
        Hi, I'm the content of an Emergency-Light-Banner!
      </muc-banner>
    `,
  }),
};

export const LeftBorder = {
  args: {
    default: "Hi, I'm a Warning-Banner with a left border!",
    variant: "content",
    type: "warning",
    leftBorder: true,
  },
};

export const Header = {
  args: {
    default: "Hi, I'm an Info-Banner!",
    variant: "header",
    type: "info",
  },
};

export const NoIcon = {
  args: {
    default: "Hi, I'm a Warning-Banner!",
    variant: "content",
    type: "warning",
    noIcon: true,
  },
};
