import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./MucCheckbox-CiYBkT8j.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={component:n,title:`Forms/MucCheckBox`,tags:[`autodocs`],parameters:{docs:{description:{component:`The MucCheckBox component is a UI element that allows users to make a binary choice, such as "yes" or "no". 
        It is typically used in forms and settings where multiple options can be selected independently.
        

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes)
`}}}},i={args:{id:`default`,label:`This is a checkbox - click me`,hint:`This is a hint`}},a={args:{id:`with-link`,name:`checkbox-terms`,required:!0},render:e=>({components:{MucCheckbox:n},setup(){return{args:e}},template:`
      <MucCheckbox v-bind="args">
        <template #label>
          I accept the <a href="#">terms of use</a>.
        </template>
      </MucCheckbox>
    `})},o=[`Default`,`WithLinkInLabel`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: "default",
    label: "This is a checkbox - click me",
    hint: "This is a hint"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: "with-link",
    name: "checkbox-terms",
    required: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      MucCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <MucCheckbox v-bind="args">
        <template #label>
          I accept the <a href="#">terms of use</a>.
        </template>
      </MucCheckbox>
    \`
  })
}`,...a.parameters?.docs?.source}}}})))()}s();export{i as Default,a as WithLinkInLabel,o as __namedExportsOrder,r as default};