import{M as p}from"./MucSelect-D9VoyVIr.js";import"./vue.esm-bundler-BeGYTx_4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={component:p,title:"Forms/MucSelect",tags:["autodocs"],parameters:{docs:{description:{component:`Choose from an option from a given list of objects or strings - multiple can also be allowed. The design is similar to the text input with autocompletion.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-combobox)
`}}}},e={args:{modelValue:{id:"1",name:"Object 1",quantity:1},items:[{id:"1",name:"Object 1",quantity:1},{id:"2",name:"Object 2",quantity:2},{id:"3",name:"Object 3",quantity:3},{id:"4",name:"Object 4",quantity:4}],label:"This is a label",hint:"This is a hint",itemTitle:"name"}},t={args:{...e.args,label:"Select multiple objects",multiple:!0}},n={args:{modelValue:"String 1",items:["String 1","String 2","String 3","String 4"],label:"Select strings",hint:"This is a hint"}};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    modelValue: {
      id: "1",
      name: "Object 1",
      quantity: 1
    },
    items: [{
      id: "1",
      name: "Object 1",
      quantity: 1
    }, {
      id: "2",
      name: "Object 2",
      quantity: 2
    }, {
      id: "3",
      name: "Object 3",
      quantity: 3
    }, {
      id: "4",
      name: "Object 4",
      quantity: 4
    }],
    label: "This is a label",
    hint: "This is a hint",
    itemTitle: "name"
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Select multiple objects",
    multiple: true
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    modelValue: "String 1",
    items: ["String 1", "String 2", "String 3", "String 4"],
    label: "Select strings",
    hint: "This is a hint"
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const h=["Default","MultiSelect","StringSelect"];export{e as Default,t as MultiSelect,n as StringSelect,h as __namedExportsOrder,S as default};
