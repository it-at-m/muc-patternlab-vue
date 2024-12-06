import MucStepper from "./MucStepper.vue";

export default {
  component: MucStepper,
  title: "MucStepper",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The MucStepper offers the functionality of a progress bar.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-form-steps)
`,
      },
    },
  },
};

export const Default = {
  args: {
    stepItems: [
      {
        id: "1",
        label: "Order",
        icon: "shopping-cart",
      },
      {
        id: "2",
        label: "Delivery",
        icon: "calendar",
      },
      {
        id: "3",
        label: "Contact",
        icon: "mail",
      },
      {
        id: "4",
        label: "Overview",
        icon: "information",
      },
    ],
    activeItem: "2",
  },
};

export const DisablePerviousSteps = {
  args: {
    stepItems: [
      {
        id: "1",
        label: "Order",
        icon: "shopping-cart",
      },
      {
        id: "2",
        label: "Delivery",
        icon: "calendar",
      },
      {
        id: "3",
        label: "Contact",
        icon: "mail",
      },
      {
        id: "4",
        label: "Overview",
        icon: "information",
      },
    ],
    activeItem: "2",
    disablePerviousSteps: true,
  },
};
