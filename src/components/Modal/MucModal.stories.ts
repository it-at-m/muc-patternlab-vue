import { ref } from "vue";

import { MucButton } from "../Button";
import MucModal from "./MucModal.vue";

export default {
  component: MucModal,
  title: "MucModal",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-modal\` component can be used to display a modal dialog which overlay the user interface.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-modal-dialog)
`,
      },
    },
  },
};

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultTemplate = (args: any) => ({
  components: { MucModal, MucButton },
  setup() {
    const openState = ref(args.open);
    const closeDialog = () => (args.open = false);

    return { args, openState, closeDialog };
  },
  template: `
    <muc-button
        @click="args.open = true"
    >
      Open Dialog
    </muc-button>
    
    <muc-modal 
        :open="args.open" 
        @close="closeDialog" 
    >
      <template #title>
        Standard Modal Dialog
      </template>
      <template #body>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
      </template>
      <template #buttons>
        <muc-button icon="arrow-right" icon-animated>Primary Button</muc-button>
        <muc-button variant="secondary">Secondary Button</muc-button>
      </template>
      <template #actions>
        <muc-button variant="ghost" icon="trash">Action 1</muc-button>
        <muc-button variant="ghost" icon="check">Action 2</muc-button>
      </template>
    </muc-modal>
  `,
});

export const Default = defaultTemplate.bind({
  args: {
    open: false,
  },
});


//eslint-disable-next-line @typescript-eslint/no-explicit-any
const minimalTemplate = (args: any) => ({
  components: { MucModal, MucButton },
  setup() {
    const openState = ref(args.open);
    const closeDialog = () => (args.open = false);

    return { args, openState, closeDialog };
  },
  template: `
    <muc-button
        @click="args.open = true"
    >
      Open Dialog
    </muc-button>
    
    <muc-modal 
        :open="args.open" 
        @close="closeDialog" 
    >
      <template #title>
        Standard Modal Dialog
      </template>
      <template #body>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
      </template>
    </muc-modal>
  `,
});

export const Minimal = minimalTemplate.bind({
  args: {
    open: false,
  },
});