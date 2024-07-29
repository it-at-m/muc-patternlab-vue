import{_ as a}from"./MucCheckbox-41oU92ia.js";import{_ as c}from"./MucCheckboxGroup-Ba8pAYmE.js";import"./vue.esm-bundler-DIzIJAKo.js";import"./MucButton-Cbp7DkA3.js";import"./MucIcon-BMESSn9B.js";const h={components:{MucCheckboxGroup:c,MucCheckbox:a},component:c,title:"Forms/MucCheckboxGroup",tags:["autodocs"],parameters:{docs:{description:{component:`The MucCheckboxGroup component is a wrapper designed to group multiple MucCheckBox components together, allowing users to select multiple options from a set.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes-collapse)`}}}},e=()=>({components:{MucCheckbox:a,MucCheckboxGroup:c},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" />
         </template>
      </MucCheckboxGroup>
  `}),o=()=>({components:{MucCheckbox:a,MucCheckboxGroup:c},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  `});var t,p,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => ({
  components: {
    MucCheckbox,
    MucCheckboxGroup
  },
  template: \`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" />
         </template>
      </MucCheckboxGroup>
  \`
})`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var n,s,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
  components: {
    MucCheckbox,
    MucCheckboxGroup
  },
  template: \`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  \`
})`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const k=["NotCollapsable","Collapsable"];export{o as Collapsable,e as NotCollapsable,k as __namedExportsOrder,h as default};
