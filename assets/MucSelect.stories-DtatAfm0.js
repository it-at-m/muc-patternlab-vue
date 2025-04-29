import{_ as g}from"./MucSelect-BM3i-O5r.js";import"./vue.esm-bundler-CDd4cxOR.js";const O={component:g,title:"Forms/MucSelect",tags:["autodocs"],parameters:{docs:{description:{component:`Choose from an option from a given list of objects or strings - multiple can also be allowed. The design is similar to the text input with autocompletion.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-combobox)
`}}}},e={args:{id:"default",modelValue:{id:"1",name:"Object 1",quantity:1},items:[{id:"1",name:"Object 1",quantity:1},{id:"2",name:"Object 2",quantity:2},{id:"3",name:"Object 3",quantity:3},{id:"4",name:"Object 4",quantity:4}],label:"This is a label",hint:"This is a hint",itemTitle:"name"}},t={args:{...e.args,modelValue:[{id:"1",name:"Object 1",quantity:1},{id:"3",name:"Object 3",quantity:3}],id:"multi-select",label:"Select multiple objects",multiple:!0}},n={args:{id:"string-select",modelValue:"String 1",items:["String 1","String 2","String 3","String 4"],label:"Select strings",hint:"This is a hint"}},a={args:{id:"placeholder",items:[{id:"1",name:"Object 1",quantity:1},{id:"2",name:"Object 2",quantity:2},{id:"3",name:"Object 3",quantity:3},{id:"4",name:"Object 4",quantity:4}],label:"This is a label",hint:"This is a hint",itemTitle:"name",placeholder:"Placeholder"}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: "default",
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var r,c,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    modelValue: [{
      id: "1",
      name: "Object 1",
      quantity: 1
    }, {
      id: "3",
      name: "Object 3",
      quantity: 3
    }],
    id: "multi-select",
    label: "Select multiple objects",
    multiple: true
  }
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "string-select",
    modelValue: "String 1",
    items: ["String 1", "String 2", "String 3", "String 4"],
    label: "Select strings",
    hint: "This is a hint"
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,p,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "placeholder",
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
    itemTitle: "name",
    placeholder: "Placeholder"
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const q=["Default","MultiSelect","StringSelect","Placeholder"];export{e as Default,t as MultiSelect,a as Placeholder,n as StringSelect,q as __namedExportsOrder,O as default};
