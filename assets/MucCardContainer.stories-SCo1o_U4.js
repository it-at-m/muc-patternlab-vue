import{M as n}from"./MucCard-Bn_GpR2c.js";import{M as t}from"./MucCardContainer-CIxEIQS4.js";import"./iframe-Caa849X8.js";import"./preload-helper-PPVm8Dsz.js";import"./MucDivider-CKdbwkgS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,c={components:{MucCardContainer:t},component:t,title:"Card/MucCardContainer",tags:["autodocs"],args:{onClick:o()},parameters:{docs:{description:{component:`A wrapping Layout to use with [MucCard](/docs/muccard--docs).

🔗 Patternlab-Docs (not yet available)
`}}}},e=()=>({components:{MucCardContainer:t,MucCard:n},template:`
      <MucCardContainer>
        <MucCard
            v-bind="$props"
            title="Lorem Ipsum"
            tagline="Dolor"
            v-for="index in 5"
            :key="index"
        >
          <template #content>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </template>
        </MucCard>
      </MucCardContainer>
    `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCardContainer,
    MucCard
  },
  template: \`
      <MucCardContainer>
        <MucCard
            v-bind="$props"
            title="Lorem Ipsum"
            tagline="Dolor"
            v-for="index in 5"
            :key="index"
        >
          <template #content>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </template>
        </MucCard>
      </MucCardContainer>
    \`
})`,...e.parameters?.docs?.source}}};const p=["Template"];export{e as Template,p as __namedExportsOrder,c as default};
