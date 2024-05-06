import MucCallout from "./MucCallout.vue";

export default {
  component: MucCallout,
  title: "MucCallout",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-callout\` component is used to convey important information to the user through the use of contextual types, icons, and colors.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-callout)
`,
      },
    },
  },
};

export const Default = {
  args: {
    header: "Information",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    type: "info",
  },
};

export const Success = {
  args: {
    ...Default.args,
    header: "Success",
    type: "success",
  },
};

export const Warning = {
  args: {
    ...Default.args,
    header: "Warning",
    type: "warning",
  },
};

export const Error = {
  args: {
    ...Default.args,
    header: "Error",
    type: "error",
  },
};
