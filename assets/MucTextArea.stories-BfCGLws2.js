import{_ as o}from"./MucTextArea-8BshZjf5.js";import"./iframe-Caa849X8.js";import"./preload-helper-PPVm8Dsz.js";import"./FormErrorMessage-Bhu0sEQT.js";import"./MucIcon-BMnsjBgR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={component:o,title:"Forms/MucTextArea",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-text-area component allows bigger text based inputs then the regular input. The size is adjustable.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-textarea)
`}}}},e={args:{id:"default",placeholder:"Write some very long text here"}},r={args:{...e.args,id:"error",errorMsg:"An error occured"}},a={args:{label:"Required textarea",...e.args,id:"required",required:!0}},t={args:{...e.args,id:"big-text-area",rows:7,label:"Big textarea",hint:"Write a lot of text"}},s={args:{...e.args,id:"count-text-area",label:"Count textarea",maxlength:50}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: "default",
    placeholder: "Write some very long text here"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "error",
    errorMsg: "An error occured"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required textarea",
    ...Default.args,
    id: "required",
    required: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "big-text-area",
    rows: 7,
    label: "Big textarea",
    hint: "Write a lot of text"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "count-text-area",
    label: "Count textarea",
    maxlength: 50
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","Error","Required","BigTextArea","CountTextArea"];export{t as BigTextArea,s as CountTextArea,e as Default,r as Error,a as Required,p as __namedExportsOrder,m as default};
