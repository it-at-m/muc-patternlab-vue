import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./MucCheckbox-CiYBkT8j.js";import{n as r,t as i}from"./MucCheckboxGroup-BcbnGFUl.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),a={components:{MucCheckboxGroup:i,MucCheckbox:n},component:i,title:`Forms/MucCheckboxGroup`,tags:[`autodocs`],parameters:{docs:{description:{component:`The MucCheckboxGroup component is a wrapper designed to group multiple MucCheckBox components together, allowing users to select multiple options from a set.

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
  `}),l=()=>({components:{MucCheckbox:n,MucCheckboxGroup:i},template:`
    <MucCheckboxGroup
      heading="Checkbox group with h4 heading"
      :headingLevel="4"
    >
      <template #checkboxes>
        <MucCheckbox
          v-for="index in 3"
          :key="'heading-level-checkbox-' + index"
          :label="'Option ' + index"
          :id="'heading-level-checkbox-' + index"
        />
      </template>
    </MucCheckboxGroup>
  `}),u=[`NotCollapsable`,`Collapsable`,`Error`,`HeadingLevel`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
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
})`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCheckbox,
    MucCheckboxGroup
  },
  template: \`
    <MucCheckboxGroup
      heading="Checkbox group with h4 heading"
      :headingLevel="4"
    >
      <template #checkboxes>
        <MucCheckbox
          v-for="index in 3"
          :key="'heading-level-checkbox-' + index"
          :label="'Option ' + index"
          :id="'heading-level-checkbox-' + index"
        />
      </template>
    </MucCheckboxGroup>
  \`
})`,...l.parameters?.docs?.source}}}})))()}d();export{s as Collapsable,c as Error,l as HeadingLevel,o as NotCollapsable,u as __namedExportsOrder,a as default};