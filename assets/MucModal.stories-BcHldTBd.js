import{r as c}from"./iframe-CthIt4Xg.js";import{M as d}from"./MucButton-CnfO-cUS.js";import{M as n}from"./MucModal-wL4IClw4.js";import"./preload-helper-Dp1pzeXC.js";import"./MucIcon-kbtEneke.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={component:n,title:"MucModal",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-modal\` component can be used to display a modal dialog which overlay the user interface.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-modal-dialog)
`}}}},g=e=>({components:{MucModal:n,MucButton:d},setup(){const a=c(e.open);return{args:e,openState:a,closeDialog:()=>e.open=!1}},template:`
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
  `}),t=g.bind({args:{open:!1}}),b=e=>({components:{MucModal:n,MucButton:d},setup(){const a=c(e.open);return{args:e,openState:a,closeDialog:()=>e.open=!1}},template:`
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
  `}),o=b.bind({args:{open:!1}});var s,m,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`defaultTemplate.bind({
  args: {
    open: false
  }
})`,...(r=(m=t.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`minimalTemplate.bind({
  args: {
    open: false
  }
})`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const k=["Default","Minimal"];export{t as Default,o as Minimal,k as __namedExportsOrder,S as default};
