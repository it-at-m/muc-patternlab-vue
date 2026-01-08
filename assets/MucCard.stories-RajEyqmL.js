import{M as a}from"./MucCard-CWnDtJTL.js";import"./iframe-B5-v3VRy.js";import"./preload-helper-PPVm8Dsz.js";import"./MucDivider-HXDzvB5Q.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,d={component:a,title:"Card/MucCard",tags:["autodocs"],args:{onClick:o()},parameters:{docs:{description:{component:`A Card-Component in Patternlab-Style.
                
Use inside [MucCardContainer](/docs/muccardcontainer--docs) for a automatically wrapping layout.

🔗 Patternlab-Docs (not yet available)
`}}}},e={args:{title:"Lorem Ipsum",tagline:"Dolor",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},t=()=>({components:{MucCard:a},template:`
      <MucCard
          v-bind="$props"
          title="Lorem Ipsum"
          tagline="Dolor"
      >
        <template #headerPrefix>
          <div
              style="padding-right: 16px; font-size: 32px;"
          >
            📆
          </div>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </template>
      </MucCard>
    `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem Ipsum",
    tagline: "Dolor",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCard
  },
  template: \`
      <MucCard
          v-bind="$props"
          title="Lorem Ipsum"
          tagline="Dolor"
      >
        <template #headerPrefix>
          <div
              style="padding-right: 16px; font-size: 32px;"
          >
            📆
          </div>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </template>
      </MucCard>
    \`
})`,...t.parameters?.docs?.source}}};const u=["Default","WithHeaderPrefix"];export{e as Default,t as WithHeaderPrefix,u as __namedExportsOrder,d as default};
