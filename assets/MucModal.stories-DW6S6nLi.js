import{n as e}from"./chunk-BneVvdWh.js";import{b as t,nt as n}from"./iframe-CUI_sGZu.js";import{t as r}from"./MucButton-DVRwyENh.js";import{t as i}from"./Button-D2ZGS4rL.js";import{n as a,t as o}from"./MucModal-Df9kvaTn.js";var s,c,l,u,d,f;e((()=>{t(),i(),a(),s={component:o,title:`MucModal`,tags:[`autodocs`],parameters:{docs:{description:{component:`The \`muc-modal\` component can be used to display a modal dialog which overlay the user interface.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-modal-dialog)
`}}}},c=e=>({components:{MucModal:o,MucButton:r},setup(){return{args:e,openState:n(e.open),closeDialog:()=>e.open=!1}},template:`
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
  `}),l=c.bind({args:{open:!1}}),u=e=>({components:{MucModal:o,MucButton:r},setup(){return{args:e,openState:n(e.open),closeDialog:()=>e.open=!1}},template:`
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
  `}),d=u.bind({args:{open:!1}}),l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`defaultTemplate.bind({
  args: {
    open: false
  }
})`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`minimalTemplate.bind({
  args: {
    open: false
  }
})`,...d.parameters?.docs?.source}}},f=[`Default`,`Minimal`]}))();export{l as Default,d as Minimal,f as __namedExportsOrder,s as default};