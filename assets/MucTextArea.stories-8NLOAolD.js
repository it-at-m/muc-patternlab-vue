import{_ as A}from"./MucTextArea-_RkB0Ncy.js";import"./iframe-DUKkxAAz.js";import"./FormErrorMessage-q1dXxtm7.js";import"./MucIcon-BAxoxAox.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={component:A,title:"Forms/MucTextArea",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-text-area component allows bigger text based inputs then the regular input. The size is adjustable.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-textarea)
`}}}},e={args:{id:"default",placeholder:"Write some very long text here"}},r={args:{...e.args,id:"error",errorMsg:"An error occured"}},a={args:{label:"Required textarea",...e.args,id:"required",required:!0}},t={args:{...e.args,id:"big-text-area",rows:7,label:"Big textarea",hint:"Write a lot of text"}},s={args:{...e.args,id:"count-text-area",label:"Count textarea",maxlength:50}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: "default",
    placeholder: "Write some very long text here"
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,u,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "error",
    errorMsg: "An error occured"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Required textarea",
    ...Default.args,
    id: "required",
    required: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "big-text-area",
    rows: 7,
    label: "Big textarea",
    hint: "Write a lot of text"
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,f,q;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "count-text-area",
    label: "Count textarea",
    maxlength: 50
  }
}`,...(q=(f=s.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};const M=["Default","Error","Required","BigTextArea","CountTextArea"];export{t as BigTextArea,s as CountTextArea,e as Default,r as Error,a as Required,M as __namedExportsOrder,C as default};
