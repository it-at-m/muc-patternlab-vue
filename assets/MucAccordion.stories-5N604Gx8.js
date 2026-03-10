import{_ as m}from"./MucIcon-DKlnivov.js";import{M as e}from"./MucAccordion-C13Zfrtp.js";import{_ as i}from"./MucAccordionItem-Bxi0xs1r.js";import"./iframe-Cuw0evxA.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={components:{MucAccordion:e},component:e,title:"Accordion/MucAccordion",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-accordion\` component offers the option of displaying content clearly in an accordion format. <br> A template with the following v-slot must be placed around the MucAccordionItems \`v-slot:default=“{onOpen, onClose, activeItems}”\`. <br> Each MucAccordionItem must be passed the following parameters with exactly these values: \`:active-items="activeItems"\` \`@open="onOpen"\` \`@close="onClose"\` . <br> For example:
        <template v-slot:default="{onOpen, onClose, activeItems}">
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
      <MucAccordionItem
      id="accordion-item-2"
      header="Accordion item 2"
      :active-items="activeItems"
      @open="onOpen"
      @close="onClose"
      >
        <template #content>
          <p>
            Text of Accordion item 2
          </p>
        </template>
      </MucAccordionItem>
    </template>
        
             

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-accordion)
`}}}},n=()=>({components:{MucAccordion:e,MucAccordionItem:i},template:`
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
          <template #content>
            <p>
              Text of Accordion item 1
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `}),o=()=>({components:{MucAccordion:e,MucAccordionItem:i},template:`
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
          <template #content>
            <p>
              Text of Accordion item 1
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `}),t=()=>({components:{MucAccordion:e,MucAccordionItem:i},template:`
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
          <template #content>
            <p>
              Text of Accordion item 1
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `}),c=()=>({components:{MucAccordion:e,MucAccordionItem:i,MucIcon:m},template:`
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
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #subtitle>
            <span class="visually-hidden">Nachricht vom</span>17.10.2023, 09:37 Uhr
          </template>
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #subtitle>
            <span class="visually-hidden">Nachricht vom</span>17.10.2023, 17:12 Uhr
          </template>
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #subtitleIcon>
            <muc-icon icon="paperclip" />
            <span class="visually-hidden">Mit Anhang</span>
          </template>
          <template #subtitle>
            <span class="visually-hidden">Nachricht vom</span>18.10.2023, 10:01 Uhr
          </template>
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    `});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => ({
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
          <template #content>
            <p>
              Text of Accordion item 1
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
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
          <template #content>
            <p>
              Text of Accordion item 1
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
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
          <template #content>
            <p>
              Text of Accordion item 1
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucAccordion,
    MucAccordionItem,
    MucIcon
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
        <MucAccordionItem
            id="accordion-item-2"
            header="Accordion item 2"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #subtitle>
            <span class="visually-hidden">Nachricht vom</span>17.10.2023, 09:37 Uhr
          </template>
          <template #content>
            <p>
              Text of Accordion item 2
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-3"
            header="Accordion item 3"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #subtitle>
            <span class="visually-hidden">Nachricht vom</span>17.10.2023, 17:12 Uhr
          </template>
          <template #content>
            <p>
              Text of Accordion item 3
            </p>
          </template>
        </MucAccordionItem>
        <MucAccordionItem
            id="accordion-item-4"
            header="Accordion item 4"
            :active-items="activeItems"
            @open="onOpen"
            @close="onClose"
        >
          <template #subtitleIcon>
            <muc-icon icon="paperclip" />
            <span class="visually-hidden">Mit Anhang</span>
          </template>
          <template #subtitle>
            <span class="visually-hidden">Nachricht vom</span>18.10.2023, 10:01 Uhr
          </template>
          <template #content>
            <p>
              Text of Accordion item 4
            </p>
          </template>
        </MucAccordionItem>
      </template>
    </MucAccordion>
    \`
})`,...c.parameters?.docs?.source}}};const A=["Template","Multiple","DetailPageMargin","WithMetadataHeader"];export{t as DetailPageMargin,o as Multiple,n as Template,c as WithMetadataHeader,A as __namedExportsOrder,u as default};
