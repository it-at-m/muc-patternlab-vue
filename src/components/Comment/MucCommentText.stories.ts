import MucCommentText from "./MucCommentText.vue";

export default {
  component: MucCommentText,
  title: "Comment/MucCommentText",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-comment component can be used to display a comment in e.g. a chat.
If you would like to display only text, we suggest using this component instead of the more generic \`muc-comment\`.
Furthermore this component does limit the number of charactesr for the initials to two.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`,
      },
    },
  },
};

export const Default = {
  args: {
    rating: 4.2,
    author: "Max Foo Bar Mustermann",
    headline: "Lorem ipsum is great",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut",
  },
};

export const Slider = {
  args: {
    ...Default.args,
    rating: 2.3,
    author: "",
    headline: "I am invisible",
    variant: "slider",
  },
};
