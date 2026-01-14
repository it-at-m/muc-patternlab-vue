import{r as s}from"./iframe-B4oQph_k.js";import{M as m}from"./MucButton-mLj95vJN.js";import{M as n}from"./MucModal-C7rSTvFk.js";import"./preload-helper-PPVm8Dsz.js";import"./MucIcon-CkZp_wA6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={component:n,title:"MucModal",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-modal\` component can be used to display a modal dialog which overlay the user interface.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-modal-dialog)
`}}}},i=e=>({components:{MucModal:n,MucButton:m},setup(){const a=s(e.open);return{args:e,openState:a,closeDialog:()=>e.open=!1}},template:`
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
  `}),t=i.bind({args:{open:!1}}),l=e=>({components:{MucModal:n,MucButton:m},setup(){const a=s(e.open);return{args:e,openState:a,closeDialog:()=>e.open=!1}},template:`
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
  `}),o=l.bind({args:{open:!1}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`defaultTemplate.bind({
  args: {
    open: false
  }
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`minimalTemplate.bind({
  args: {
    open: false
  }
})`,...o.parameters?.docs?.source}}};const y=["Default","Minimal"];export{t as Default,o as Minimal,y as __namedExportsOrder,f as default};
