import{_ as o}from"./MucAccordionItem-CJx3wnzy.js";import"./iframe-B4oQph_k.js";import"./preload-helper-PPVm8Dsz.js";import"./MucIcon-CkZp_wA6.js";const i={components:{MucAccordionItem:o},component:o,title:"Accordion/MucAccordionItem",tags:["autodocs"],parameters:{docs:{description:{component:'The `muc-accordion-item` component represents an item of an `muc-accordion` <br> Each MucAccordionItem must be passed the following parameters with exactly this values: `:active-items="activeItems"` `@open="onOpen"` `@close="onClose"`\n             \n[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-accordion)\n'}}}},e=()=>({components:{MucAccordionItem:o},template:`

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

  `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => ({
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
      <template #text>
        Text of Accordion item 1
      </template>
    </MucAccordionItem>

  \`
})`,...e.parameters?.docs?.source}}};const r=["Template"];export{e as Template,r as __namedExportsOrder,i as default};
