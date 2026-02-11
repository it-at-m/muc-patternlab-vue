import{_ as e,a as o}from"./MucRadioButtonGroup-DP2fxpON.js";import"./iframe-abxS8dB0.js";import"./preload-helper-PPVm8Dsz.js";const u={component:o,title:"Forms/MucRadioButton",tags:["autodocs"],parameters:{docs:{description:{component:`
Offers simple functionality of a radio-button.
You need to use the radio-button within the radio-button-group - combined you can provide grouping functionality to allow users to select from a predefined set of options.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-radios)
`}}}},t=()=>({components:{MucRadioButton:o,MucRadioButtonGroup:e},template:`
      <MucRadioButtonGroup heading="Checkbox group" model-value="">
         <template v-slot:default>
           <MucRadioButton value="first" label="first option" hint="This is a hint for this radiobutton" id="first"/>
           <MucRadioButton v-for="index in 3" :key="index" :label="'other option-' + index" :value="'val-' + index" :id="'other-option' + index"/>
         </template>
      </MucRadioButtonGroup>
  `});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucRadioButton,
    MucRadioButtonGroup
  },
  template: \`
      <MucRadioButtonGroup heading="Checkbox group" model-value="">
         <template v-slot:default>
           <MucRadioButton value="first" label="first option" hint="This is a hint for this radiobutton" id="first"/>
           <MucRadioButton v-for="index in 3" :key="index" :label="'other option-' + index" :value="'val-' + index" :id="'other-option' + index"/>
         </template>
      </MucRadioButtonGroup>
  \`
})`,...t.parameters?.docs?.source}}};const r=["Default"];export{t as Default,r as __namedExportsOrder,u as default};
