import MucCounter from "./MucCounter.vue";

export default {
    component: MucCounter,
    title: "Forms/MucCounter",
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `The MucCounter offers the functionality of a simple counter.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-combobox)
`,
            },
        },
    },
};

export const Default = {
    args: {
        modelValue: 0,
        label: "This is a label",
    },
};

export const MinAndMax = {
    args: {
        ...Default.args,
        modelValue: 2,
        min: 2,
        max: 10,
    },
};

export const Link = {
    args: {
        ...Default.args,
        link: "#",
    },
};

export const Disabled = {
    args: {
        ...Default.args,
        disabled: true,
    },
};
