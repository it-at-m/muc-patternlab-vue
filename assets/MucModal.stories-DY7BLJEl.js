import{i as e}from"./preload-helper-CT_b8DTk.js";import{ot as t,x as n}from"./iframe-jWriqL6L.js";import{t as r}from"./MucButton-BoYYGu-9.js";import{t as i}from"./Button-D1ZDrNdh.js";import{n as a,t as o}from"./MucModal-AKzhgkH0.js";var s,c,l,u,d,f;e((()=>{n(),i(),a(),s={component:o,title:`MucModal`,tags:[`autodocs`],parameters:{docs:{description:{component:`The \`muc-modal\` component can be used to display a modal dialog which overlay the user interface.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-modal-dialog)
`}}}},c=e=>({components:{MucModal:o,MucButton:r},setup(){return{args:e,openState:t(e.open),closeDialog:()=>e.open=!1}},template:`
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
  `}),l=c.bind({args:{open:!1}}),u=e=>({components:{MucModal:o,MucButton:r},setup(){return{args:e,openState:t(e.open),closeDialog:()=>e.open=!1}},template:`
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