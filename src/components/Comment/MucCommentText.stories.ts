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
Furthermore this component does limit the number of initial characters to two.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`,
      },
    },
  },
};
