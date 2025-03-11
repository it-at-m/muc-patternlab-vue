import{_ as a}from"./MucCheckbox-CKijizN-.js";import{_ as c}from"./MucCheckboxGroup-neCLDymi.js";import"./vue.esm-bundler-CDd4cxOR.js";import"./MucButton-CH9fssm7.js";import"./MucIcon-B70FWVBC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={components:{MucCheckboxGroup:c,MucCheckbox:a},component:c,title:"Forms/MucCheckboxGroup",tags:["autodocs"],parameters:{docs:{description:{component:`The MucCheckboxGroup component is a wrapper designed to group multiple MucCheckBox components together, allowing users to select multiple options from a set.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes-collapse)`}}}},e=()=>({components:{MucCheckbox:a,MucCheckboxGroup:c},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="index"/>
         </template>
      </MucCheckboxGroup>
  `}),o=()=>({components:{MucCheckbox:a,MucCheckboxGroup:c},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" :id="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  `});var l,p,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
  components: {
    MucCheckbox,
    MucCheckboxGroup
  },
  template: \`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="index"/>
         </template>
      </MucCheckboxGroup>
  \`
})`,...(t=(p=e.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var n,s,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
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
})`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const k=["NotCollapsable","Collapsable"];export{o as Collapsable,e as NotCollapsable,k as __namedExportsOrder,h as default};
