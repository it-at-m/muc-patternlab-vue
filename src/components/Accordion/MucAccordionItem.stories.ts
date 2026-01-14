import MucAccordionItem from "./MucAccordionItem.vue";

export default {
  components: { MucAccordionItem },
  component: MucAccordionItem,
  title: "Accordion/MucAccordionItem",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-accordion-item\` component represents an item of an \`muc-accordion\` <br> Each MucAccordionItem must be passed the following parameters with exactly this values: \`:active-items="activeItems"\` \`@open="onOpen"\` \`@close="onClose"\`
             
[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-accordion)
`,
      },
    },
  },
};

export const Template = () => ({
  components: { MucAccordionItem },
  template: `

    <MucAccordionItem
        id="accordion-item-1"
        header="Accordion item 1"
        :active-items="activeItems"
        @open="onOpen"
        @close="onClose"
    >
      <template #text>
        Text of Accordion item 1
      </template>
    </MucAccordionItem>

  `,
});
