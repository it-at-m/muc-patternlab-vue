import MucSelect from "./MucSelect.vue";

export default {
  component: MucSelect,
  title: "Forms/MucSelect",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Choose from an option from a given list of objects or strings - multiple can also be allowed. The design is similar to the text input with autocompletion.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-combobox)
`,
      },
    },
  },
};

export const Default = {
  args: {
    modelValue: {
      id: "1",
      name: "Object 1",
      quantity: 1,
    },
    items: [
      {
        id: "1",
        name: "Object 1",
        quantity: 1,
      },
      {
        id: "2",
        name: "Object 2",
        quantity: 2,
      },
      {
        id: "3",
        name: "Object 3",
        quantity: 3,
      },
      {
        id: "4",
        name: "Object 4",
        quantity: 4,
      },
    ],
    label: "This is a label",
    hint: "This is a hint",
    itemTitle: "name",
  },
};

export const MultiSelect = {
  args: {
    ...Default.args,
    label: "Select multiple objects",
    multiple: true,
  },
};

export const StringSelect = {
  args: {
    modelValue: "String 1",
    items: ["String 1", "String 2", "String 3", "String 4"],
    label: "Select strings",
    hint: "This is a hint",
  },
};
