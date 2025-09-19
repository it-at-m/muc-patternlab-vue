import{_ as r}from"./MucCheckbox-SQtoSVeX.js";import{_ as e}from"./MucCheckboxGroup-8TYX246k.js";import"./iframe-CthIt4Xg.js";import"./preload-helper-Dp1pzeXC.js";import"./MucButton-CnfO-cUS.js";import"./MucIcon-kbtEneke.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-NCdMDAOd.js";const f={components:{MucCheckboxGroup:e,MucCheckbox:r},component:e,title:"Forms/MucCheckboxGroup",tags:["autodocs"],parameters:{docs:{description:{component:`The MucCheckboxGroup component is a wrapper designed to group multiple MucCheckBox components together, allowing users to select multiple options from a set.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes-collapse)`}}}},o=()=>({components:{MucCheckbox:r,MucCheckboxGroup:e},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" hint="This is a hint for this checkbox" :id="index"/>
         </template>
      </MucCheckboxGroup>
  `}),c=()=>({components:{MucCheckbox:r,MucCheckboxGroup:e},template:`
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" :id="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  `}),t=()=>({components:{MucCheckbox:r,MucCheckboxGroup:e},template:`
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
  `});var a,p,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => ({
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
})`,...(n=(p=o.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var l,s,i;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
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
})`,...(i=(s=c.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var x,u,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => ({
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
})`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const _=["NotCollapsable","Collapsable","Error"];export{c as Collapsable,t as Error,o as NotCollapsable,_ as __namedExportsOrder,f as default};
