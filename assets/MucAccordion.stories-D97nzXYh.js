import{_ as e}from"./MucAccordion-ZS7x4HaX.js";import{_ as n}from"./MucAccordionItem-CJx3wnzy.js";import"./iframe-B4oQph_k.js";import"./preload-helper-PPVm8Dsz.js";import"./MucIcon-CkZp_wA6.js";const s={components:{MucAccordion:e},component:e,title:"Accordion/MucAccordion",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-accordion\` component offers the option of displaying content clearly in an accordion format. <br> A template with the following v-slot must be placed around the MucAccordionItems \`v-slot:default=“{onOpen, onClose, activeItems}”\`. <br> Each MucAccordionItem must be passed the following parameters with exactly these values: \`:active-items="activeItems"\` \`@open="onOpen"\` \`@close="onClose"\` . <br> For example:
        <template v-slot:default="{onOpen, onClose, activeItems}">
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
      <MucAccordionItem
      id="accordion-item-2"
      header="Accordion item 2"
      :active-items="activeItems"
      @open="onOpen"
      @close="onClose"
      >
        <template #text>
          Text of Accordion item 2
        </template>
      </MucAccordionItem>
    </template>
        
             

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-accordion)
`}}}},o=()=>({components:{MucAccordion:e,MucAccordionItem:n},template:`
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
            Text of Accordion item 1
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
            Text of Accordion item 2
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
            Text of Accordion item 3
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
            Text of Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `}),t=()=>({components:{MucAccordion:e,MucAccordionItem:n},template:`
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
            Text of Accordion item 1
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
            Text of Accordion item 2
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
            Text of Accordion item 3
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
            Text of Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `}),c=()=>({components:{MucAccordion:e,MucAccordionItem:n},template:`
    <MucAccordion
        id="accordion"
        header="Lorem ipsum dolor"
        multiple
        detail-page-margin
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
            Text of Accordion item 1
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
            Text of Accordion item 2
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
            Text of Accordion item 3
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
            Text of Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
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
            Text of Accordion item 1
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
            Text of Accordion item 2
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
            Text of Accordion item 3
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
            Text of Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => ({
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
            Text of Accordion item 1
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
            Text of Accordion item 2
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
            Text of Accordion item 3
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
            Text of Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordion,
    MucAccordionItem
  },
  template: \`
    <MucAccordion
        id="accordion"
        header="Lorem ipsum dolor"
        multiple
        detail-page-margin
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
            Text of Accordion item 1
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
            Text of Accordion item 2
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
            Text of Accordion item 3
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
            Text of Accordion item 4
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...c.parameters?.docs?.source}}};const l=["Template","Multiple","DetailPageMargin"];export{c as DetailPageMargin,t as Multiple,o as Template,l as __namedExportsOrder,s as default};
