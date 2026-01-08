import{_ as t}from"./MucAccordion-Do7ZQxI6.js";import{_ as c}from"./MucAccordionItem-igb85HlE.js";import"./iframe-Cs0X-qEN.js";import"./preload-helper-PPVm8Dsz.js";import"./MucIcon-Dudwo8NT.js";const d={components:{MucAccordion:t},component:t,title:"Accordion/MucAccordion",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-accordion\` component offers the option of displaying content clearly in an accordion format. <br> A template with the following v-slot must be placed around the MucAccordionItems \`v-slot:default=“{onOpen, onClose, activeItems}”\`. <br> Each MucAccordionItem must be passed the following parameters with exactly these values: \`:active-items="activeItems"\` \`@open="onOpen"\` \`@close="onClose"\` . <br> For example:
        <template v-slot:default="{onOpen, onClose, activeItems}">
      <MucAccordionItem
          id="accordion-item-1"
          header="Accordion item 1"
          :active-items="activeItems"
          @open="onOpen"
          @close="onClose"
      >
        <template #text>
          Text of   Accordion item 1
        </template>
      </MucAccordionItem>
      <MucAccordionItem
      id="accordion-item-2"
      header="Accordion item 2"
      :active-items="activeItems"
      @open="onOpen"
      @close="onClose"
      >
        <template #text>
          Text of   Accordion item 2
        </template>
      </MucAccordionItem>
    </template>
        
             

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-accordion)
`}}}},e=()=>({components:{MucAccordion:t,MucAccordionItem:c},template:`
    <MucAccordion
        id="accordion"
        header="Lorem ipsum dolor"
        defaultItem="accordion-item-1"
    >
      <template v-slot:default="{onOpen, onClose, activeItems}">
        <MucAccordionItem
            id="accordion-item-1"
            header="Accordion item 1"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 1
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 2
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 3
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `}),o=()=>({components:{MucAccordion:t,MucAccordionItem:c},template:`
    <MucAccordion
        id="accordion"
        header="Lorem ipsum dolor"
        multiple
    >
      <template v-slot:default="{onOpen, onClose, activeItems}">
        <MucAccordionItem
            id="accordion-item-1"
            header="Accordion item 1"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 1
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 2
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 3
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordion,
    MucAccordionItem
  },
  template: \`
    <MucAccordion
        id="accordion"
        header="Lorem ipsum dolor"
        defaultItem="accordion-item-1"
    >
      <template v-slot:default="{onOpen, onClose, activeItems}">
        <MucAccordionItem
            id="accordion-item-1"
            header="Accordion item 1"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 1
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 2
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 3
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordion,
    MucAccordionItem
  },
  template: \`
    <MucAccordion
        id="accordion"
        header="Lorem ipsum dolor"
        multiple
    >
      <template v-slot:default="{onOpen, onClose, activeItems}">
        <MucAccordionItem
            id="accordion-item-1"
            header="Accordion item 1"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 1
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 2
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 3
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #text>
            Text of   Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...o.parameters?.docs?.source}}};const s=["Template","Multiple"];export{o as Multiple,e as Template,s as __namedExportsOrder,d as default};
