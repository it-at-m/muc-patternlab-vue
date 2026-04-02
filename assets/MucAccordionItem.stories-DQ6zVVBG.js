import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./MucIcon-xEypBXso.js";import{n as r,t as i}from"./MucAccordionItem-DH0kywlk.js";var a,o,s,c,l,u;e((()=>{t(),r(),a={components:{MucAccordionItem:i},component:i,title:`Accordion/MucAccordionItem`,tags:[`autodocs`],parameters:{docs:{description:{component:'The `muc-accordion-item` component represents an item of an `muc-accordion` <br> Each MucAccordionItem must be passed the following parameters with exactly this values: `:active-items="activeItems"` `@open="onOpen"` `@close="onClose"` <br> The text within the content slot can be structured using paragraphs and bullet points. Plain text must be enclosed in a `<p>` tag.\n             \n[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-accordion)\n'}}}},o=()=>({components:{MucAccordionItem:i},template:`

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
  `}),s=()=>({components:{MucAccordionItem:i,MucIcon:n},template:`

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
  `}),c=()=>({components:{MucAccordionItem:i,MucIcon:n},template:`

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
  `}),l=()=>({components:{MucAccordionItem:i},template:`

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
  `}),o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
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
})`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => ({
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
})`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => ({
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
})`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => ({
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
})`,...l.parameters?.docs?.source}}},u=[`Template`,`WithMetaText`,`WithMetaTextAndIcon`,`TextWithMultiplePTags`]}))();export{o as Template,l as TextWithMultiplePTags,s as WithMetaText,c as WithMetaTextAndIcon,u as __namedExportsOrder,a as default};