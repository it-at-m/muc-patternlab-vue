import{n as e}from"./chunk-BneVvdWh.js";import{i as t,n,r,t as i}from"./MucRadioButtonGroup-CDSYdYOP.js";var a,o,s;e((()=>{t(),n(),a={component:r,title:`Forms/MucRadioButton`,tags:[`autodocs`],parameters:{docs:{description:{component:`
Offers simple functionality of a radio-button.
You need to use the radio-button within the radio-button-group - combined you can provide grouping functionality to allow users to select from a predefined set of options.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-radios)
`}}}},o=()=>({components:{MucRadioButton:r,MucRadioButtonGroup:i},template:`
      <MucRadioButtonGroup heading="Checkbox group" model-value="">
         <template v-slot:default>
           <MucRadioButton value="first" label="first option" hint="This is a hint for this radiobutton" id="first"/>
           <MucRadioButton v-for="index in 3" :key="index" :label="'other option-' + index" :value="'val-' + index" :id="'other-option' + index"/>
         </template>
      </MucRadioButtonGroup>
  `}),o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
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
})`,...o.parameters?.docs?.source}}},s=[`Default`]}))();export{o as Default,s as __namedExportsOrder,a as default};