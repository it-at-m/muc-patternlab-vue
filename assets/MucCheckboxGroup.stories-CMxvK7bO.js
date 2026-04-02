import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./MucCheckbox-DEtsUvRd.js";import{n as r,t as i}from"./MucCheckboxGroup-DE5yWrGY.js";var a,o,s,c,l;e((()=>{t(),r(),a={components:{MucCheckboxGroup:i,MucCheckbox:n},component:i,title:`Forms/MucCheckboxGroup`,tags:[`autodocs`],parameters:{docs:{description:{component:`The MucCheckboxGroup component is a wrapper designed to group multiple MucCheckBox components together, allowing users to select multiple options from a set.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes-collapse)`}}}},o=()=>({components:{MucCheckbox:n,MucCheckboxGroup:i},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" hint="This is a hint for this checkbox" :id="index"/>
         </template>
      </MucCheckboxGroup>
  `}),s=()=>({components:{MucCheckbox:n,MucCheckboxGroup:i},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" :id="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  `}),c=()=>({components:{MucCheckbox:n,MucCheckboxGroup:i},template:`
    <MucCheckboxGroup
      heading="Checkbox group with error"
      errorMsg="Please select at least one option"
    >
      <template #checkboxes>
        <MucCheckbox
          v-for="index in 3"
          :key="'error-checkbox-' + index"
          :label="'Option ' + index"
          :id="'error-checkbox-' + index"
        />
      </template>
    </MucCheckboxGroup>
  `}),o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCheckbox,
    MucCheckboxGroup
  },
  template: \`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" hint="This is a hint for this checkbox" :id="index"/>
         </template>
      </MucCheckboxGroup>
  \`
})`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCheckbox,
    MucCheckboxGroup
  },
  template: \`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" :id="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  \`
})`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCheckbox,
    MucCheckboxGroup
  },
  template: \`
    <MucCheckboxGroup
      heading="Checkbox group with error"
      errorMsg="Please select at least one option"
    >
      <template #checkboxes>
        <MucCheckbox
          v-for="index in 3"
          :key="'error-checkbox-' + index"
          :label="'Option ' + index"
          :id="'error-checkbox-' + index"
        />
      </template>
    </MucCheckboxGroup>
  \`
})`,...c.parameters?.docs?.source}}},l=[`NotCollapsable`,`Collapsable`,`Error`]}))();export{s as Collapsable,c as Error,o as NotCollapsable,l as __namedExportsOrder,a as default};