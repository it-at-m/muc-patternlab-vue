import MucToggle from "./MucToggle.vue";

export default {
  component: MucToggle,
  title: "Form/MucToggle",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The MucToggle component allows users to switch between two states.",
      },
    },
  },
};

export const Default = {
  args: {
    modelValue: false,
  },
};
