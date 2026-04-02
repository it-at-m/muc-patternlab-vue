import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./MucTextArea-Cbpeg7Wd.js";var r,i,a,o,s,c,l;e((()=>{t(),r={component:n,title:`Forms/MucTextArea`,tags:[`autodocs`],parameters:{docs:{description:{component:`The muc-text-area component allows bigger text based inputs then the regular input. The size is adjustable.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-textarea)
`}}}},i={args:{id:`default`,placeholder:`Write some very long text here`}},a={args:{...i.args,id:`error`,errorMsg:`An error occured`}},o={args:{label:`Required textarea`,...i.args,id:`required`,required:!0}},s={args:{...i.args,id:`big-text-area`,rows:7,label:`Big textarea`,hint:`Write a lot of text`}},c={args:{...i.args,id:`count-text-area`,label:`Count textarea`,maxlength:50}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: "default",
    placeholder: "Write some very long text here"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "error",
    errorMsg: "An error occured"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required textarea",
    ...Default.args,
    id: "required",
    required: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "big-text-area",
    rows: 7,
    label: "Big textarea",
    hint: "Write a lot of text"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "count-text-area",
    label: "Count textarea",
    maxlength: 50
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Error`,`Required`,`BigTextArea`,`CountTextArea`]}))();export{s as BigTextArea,c as CountTextArea,i as Default,a as Error,o as Required,l as __namedExportsOrder,r as default};