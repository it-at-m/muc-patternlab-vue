import MucComment from "./MucComment.vue";

export default {
  component: MucComment,
  title: "Comment/MucComment",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-comment component can be used to display a comment in e.g. a chat.
The \`muc-comment\`-component is designed to be as generic as possible.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`,
      },
    },
  },
};

export const Default = {
  args: {
    rating: 5,
    initials: "MM",
    author: "Max Mustermann",
    datePrefix: "·",
    date: "01.01.1970",
    headline: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut",
  },
};

export const Slider = {
  args: {
    ...Default.args,
    rating: 2.3,
    variant: "slider",
  },
};
