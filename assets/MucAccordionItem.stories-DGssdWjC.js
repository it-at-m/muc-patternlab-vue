import{_ as i}from"./MucIcon-z9ASVbhx.js";import{_ as e}from"./MucAccordionItem-CvSZO9q_.js";import"./iframe-CeNjih2_.js";import"./preload-helper-PPVm8Dsz.js";const p={components:{MucAccordionItem:e},component:e,title:"Accordion/MucAccordionItem",tags:["autodocs"],parameters:{docs:{description:{component:'The `muc-accordion-item` component represents an item of an `muc-accordion` <br> Each MucAccordionItem must be passed the following parameters with exactly this values: `:active-items="activeItems"` `@open="onOpen"` `@close="onClose"` <br> The text within the content slot can be structured using paragraphs and bullet points. Plain text must be enclosed in a `<p>` tag.\n             \n[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-accordion)\n'}}}},t=()=>({components:{MucAccordionItem:e},template:`

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
  `}),n=()=>({components:{MucAccordionItem:e,MucIcon:i},template:`

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
  `}),o=()=>({components:{MucAccordionItem:e,MucIcon:i},template:`

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
  `}),c=()=>({components:{MucAccordionItem:e},template:`

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
  `});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordionItem
  },
  template: \`

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
  \`
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordionItem,
    MucIcon
  },
  template: \`

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
  \`
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordionItem,
    MucIcon
  },
  template: \`

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
  \`
})`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordionItem
  },
  template: \`

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
  \`
})`,...c.parameters?.docs?.source}}};const d=["Template","WithMetaText","WithMetaTextAndIcon","TextWithMultiplePTags"];export{t as Template,c as TextWithMultiplePTags,n as WithMetaText,o as WithMetaTextAndIcon,d as __namedExportsOrder,p as default};
