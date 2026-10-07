import MucToggle from "./MucToggle.vue";

export default {
  component: MucToggle,
  title: "MucToggle",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          `The MucToggle component allows users to switch between two states.
          
[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-switch-toggle)
`,
      },
    },
  },
};

export const Default = {
  args: {
    modelValue: false,
  },
};

export const WithOneLabel = {
  args: {
    modelValue: false,
    labelLeft: "Nur geöffnete Standorte anzeigen",
  },
};

export const WithTwoLabels = {
  args: {
    modelValue: false,
    labelLeft: "Listenansicht",
    labelRight: "Kalenderansicht",
  },
};
