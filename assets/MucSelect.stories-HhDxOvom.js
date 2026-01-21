import{_ as i}from"./MucSelect-B7M9uq4D.js";import"./iframe-CrT2w3oT.js";import"./preload-helper-PPVm8Dsz.js";const c={component:i,title:"Forms/MucSelect",tags:["autodocs"],parameters:{docs:{description:{component:`Choose from an option from a given list of objects or strings - multiple can also be allowed. The design is similar to the text input with autocompletion.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-combobox)
`}}}},e={args:{id:"default",modelValue:{id:"1",name:"Object 1",quantity:1},items:[{id:"1",name:"Object 1",quantity:1},{id:"2",name:"Object 2",quantity:2},{id:"3",name:"Object 3",quantity:3},{id:"4",name:"Object 4",quantity:4}],label:"This is a label",hint:"This is a hint",itemTitle:"name"}},t={args:{...e.args,modelValue:[{id:"1",name:"Object 1",quantity:1},{id:"3",name:"Object 3",quantity:3}],id:"multi-select",label:"Select multiple objects",multiple:!0}},n={args:{id:"string-select",modelValue:"String 1",items:["String 1","String 2","String 3","String 4"],label:"Select strings",hint:"This is a hint"}},a={args:{id:"placeholder",items:[{id:"1",name:"Object 1",quantity:1},{id:"2",name:"Object 2",quantity:2},{id:"3",name:"Object 3",quantity:3},{id:"4",name:"Object 4",quantity:4}],label:"This is a label",hint:"This is a hint",itemTitle:"name",placeholder:"Placeholder"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "string-select",
    modelValue: "String 1",
    items: ["String 1", "String 2", "String 3", "String 4"],
    label: "Select strings",
    hint: "This is a hint"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const o=["Default","MultiSelect","StringSelect","Placeholder"];export{e as Default,t as MultiSelect,a as Placeholder,n as StringSelect,o as __namedExportsOrder,c as default};
