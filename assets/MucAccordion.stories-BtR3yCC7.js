import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./MucIcon-xEypBXso.js";import{n as r,t as i}from"./MucAccordion-DmE5QJzP.js";import{n as a,t as o}from"./MucAccordionItem-DH0kywlk.js";var s,c,l,u,d,f;e((()=>{t(),r(),a(),s={components:{MucAccordion:i},component:i,title:`Accordion/MucAccordion`,tags:[`autodocs`],parameters:{docs:{description:{component:`The \`muc-accordion\` component offers the option of displaying content clearly in an accordion format. <br> A template with the following v-slot must be placed around the MucAccordionItems \`v-slot:default=“{onOpen, onClose, activeItems}”\`. <br> Each MucAccordionItem must be passed the following parameters with exactly these values: \`:active-items="activeItems"\` \`@open="onOpen"\` \`@close="onClose"\` . <br> For example:
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
`}}}},c=()=>({components:{MucAccordion:i,MucAccordionItem:o},template:`
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
    `}),l=()=>({components:{MucAccordion:i,MucAccordionItem:o},template:`
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
    `}),u=()=>({components:{MucAccordion:i,MucAccordionItem:o},template:`
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
    `}),d=()=>({components:{MucAccordion:i,MucAccordionItem:o,MucIcon:n},template:`
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
    `}),c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => ({
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
})`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => ({
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
})`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => ({
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
})`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => ({
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
})`,...d.parameters?.docs?.source}}},f=[`Template`,`Multiple`,`DetailPageMargin`,`WithMetadataHeader`]}))();export{u as DetailPageMargin,l as Multiple,c as Template,d as WithMetadataHeader,f as __namedExportsOrder,s as default};