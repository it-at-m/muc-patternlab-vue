import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./MucSelect-CFGHPDzy.js";var r,i,a,o,s,c;e((()=>{t(),r={component:n,title:`Forms/MucSelect`,tags:[`autodocs`],parameters:{docs:{description:{component:`Choose from an option from a given list of objects or strings - multiple can also be allowed. The design is similar to the text input with autocompletion.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-combobox)
`}}}},i={args:{id:`default`,modelValue:{id:`1`,name:`Object 1`,quantity:1},items:[{id:`1`,name:`Object 1`,quantity:1},{id:`2`,name:`Object 2`,quantity:2},{id:`3`,name:`Object 3`,quantity:3},{id:`4`,name:`Object 4`,quantity:4}],label:`This is a label`,hint:`This is a hint`,itemTitle:`name`}},a={args:{...i.args,modelValue:[{id:`1`,name:`Object 1`,quantity:1},{id:`3`,name:`Object 3`,quantity:3}],id:`multi-select`,label:`Select multiple objects`,multiple:!0}},o={args:{id:`string-select`,modelValue:`String 1`,items:[`String 1`,`String 2`,`String 3`,`String 4`],label:`Select strings`,hint:`This is a hint`}},s={args:{id:`placeholder`,items:[{id:`1`,name:`Object 1`,quantity:1},{id:`2`,name:`Object 2`,quantity:2},{id:`3`,name:`Object 3`,quantity:3},{id:`4`,name:`Object 4`,quantity:4}],label:`This is a label`,hint:`This is a hint`,itemTitle:`name`,placeholder:`Placeholder`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "string-select",
    modelValue: "String 1",
    items: ["String 1", "String 2", "String 3", "String 4"],
    label: "Select strings",
    hint: "This is a hint"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Default`,`MultiSelect`,`StringSelect`,`Placeholder`]}))();export{i as Default,a as MultiSelect,s as Placeholder,o as StringSelect,c as __namedExportsOrder,r as default};