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
                label: "Bestellung",
                icon: "shopping-cart",
            },
            {
                id: "2",
                label: "Lieferung",
                icon: "calendar",
            },
            {
                id: "3",
                label: "Kontakt",
                icon: "mail",
            },
            {
                id: "4",
                label: "Übersicht",
                icon: "information",
            },
        ],
        activeItem: "2",
    },
};

