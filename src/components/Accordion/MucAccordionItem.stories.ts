import MucIcon from "../Icon/MucIcon.vue";
import MucAccordionItem from "./MucAccordionItem.vue";

export default {
  components: { MucAccordionItem },
  component: MucAccordionItem,
  title: "Accordion/MucAccordionItem",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-accordion-item\` component represents an item of an \`muc-accordion\` <br> Each MucAccordionItem must be passed the following parameters with exactly this values: \`:active-items="activeItems"\` \`@open="onOpen"\` \`@close="onClose"\` <br> The text within the content slot can be structured using paragraphs and bullet points. Plain text must be enclosed in a \`<p>\` tag.
             
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
      <template #content>
        <p>
          Text of Accordion item 1
        </p>
      </template>
    </MucAccordionItem>
  `,
});

export const WithMetaText = () => ({
  components: { MucAccordionItem, MucIcon },
  template: `

    <MucAccordionItem
        id="accordion-item-1"
        header="Accordion item 1"
        :active-items="activeItems"
        @open="onOpen"
        @close="onClose"
    >
      <template #subtitle>
        <span class="visually-hidden">Nachricht vom</span>17.10.2023, 08:52 Uhr
      </template>
      <template #content>
        <p>
          Text of Accordion item 1
        </p>
      </template>
    </MucAccordionItem>
  `,
});

export const WithMetaTextAndIcon = () => ({
  components: { MucAccordionItem, MucIcon },
  template: `

    <MucAccordionItem
        id="accordion-item-1"
        header="Accordion item 1"
        :active-items="activeItems"
        @open="onOpen"
        @close="onClose"
    >
      <template #subtitleIcon>
        <muc-icon icon="paperclip" />
        <span class="visually-hidden">Mit Anhang</span>
      </template>
      <template #subtitle>
        <span class="visually-hidden">Nachricht vom</span>17.10.2023, 08:52 Uhr
      </template>
      <template #content>
        <p>
          Text of Accordion item 1
        </p>
      </template>
    </MucAccordionItem>
  `,
});

export const TextWithMultiplePTags = () => ({
  components: { MucAccordionItem },
  template: `

    <MucAccordionItem
        id="accordion-item-1"
        header="Accordion item 1"
        :active-items="activeItems"
        @open="onOpen"
        @close="onClose"
    >
      <template #content>
        <p>
          Text of Accordion item 1
        </p>
        <p>
          Another text of Accordion item 1
        </p>
      </template>
    </MucAccordionItem>
  `,
});
