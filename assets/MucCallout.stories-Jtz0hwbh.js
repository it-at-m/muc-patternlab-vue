import{M as s}from"./MucButton-BaYkZMke.js";import{_ as n}from"./MucCallout-CGHKe754.js";import"./iframe-D-zVlmdu.js";import"./preload-helper-PPVm8Dsz.js";import"./MucIcon-DwcZwjQ0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={component:n,title:"MucCallout",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-callout\` component is used to convey important information to the user through the use of contextual types, icons, and colors.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-callout)
`}}}},e={args:{header:"Information",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",type:"info"}},t={args:{...e.args,header:"Success",type:"success"}},r={args:{...e.args,header:"Warning",type:"warning"}},o={args:{...e.args,header:"Error",type:"error"}},a=()=>({components:{MucCallout:n,MucButton:s},template:`
      <MucCallout
          type="info"
      >
        <template #header>
         Button
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </template>
        <template #buttons>
          <muc-button icon="arrow-right" icon-animated> Button</muc-button>
        </template>
      </MucCallout>
    `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    header: "Information",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    type: "info"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Success",
    type: "success"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Warning",
    type: "warning"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Error",
    type: "error"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCallout,
    MucButton
  },
  template: \`
      <MucCallout
          type="info"
      >
        <template #header>
         Button
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </template>
        <template #buttons>
          <muc-button icon="arrow-right" icon-animated> Button</muc-button>
        </template>
      </MucCallout>
    \`
})`,...a.parameters?.docs?.source}}};const g=["Default","Success","Warning","Error","WithButton"];export{e as Default,o as Error,t as Success,r as Warning,a as WithButton,g as __namedExportsOrder,d as default};
