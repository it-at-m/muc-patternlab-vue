import{_ as i,a as n}from"./MucRadioButtonGroup-CEGbmg-E.js";import"./vue.esm-bundler-BeGYTx_4.js";const s={component:i,title:"Forms/MucRadioButton",tags:["autodocs"],parameters:{docs:{description:{component:`
Offers simple functionality of a radio-button.
You need to use the radio-button within the radio-button-group - combined you can provide grouping functionality to allow users to select from a predefined set of options.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-radios)
`}}}},t=()=>({components:{MucRadioButton:i,MucRadioButtonGroup:n},template:`
      <MucRadioButtonGroup heading="Checkbox group" model-value="">
         <template v-slot:default>
           <MucRadioButton value="first" label="first option" hint="This is a hint for this radiobutton"/>
           <MucRadioButton v-for="index in 3" :key="index" :label="'other option-' + index" :value="'val-' + index"/>
         </template>
      </MucRadioButtonGroup>
  `});var o,e,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => ({
  components: {
    MucRadioButton,
    MucRadioButtonGroup
  },
  template: \`
      <MucRadioButtonGroup heading="Checkbox group" model-value="">
         <template v-slot:default>
           <MucRadioButton value="first" label="first option" hint="This is a hint for this radiobutton"/>
           <MucRadioButton v-for="index in 3" :key="index" :label="'other option-' + index" :value="'val-' + index"/>
         </template>
      </MucRadioButtonGroup>
  \`
})`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,s as default};
