import{M as r}from"./MucCard-BwaRpu5A.js";import{M as t}from"./MucCardContainer-BVzDSYnT.js";import"./iframe-Br6r6eJn.js";import"./MucDivider-D1GnB1i2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,u={components:{MucCardContainer:t},component:t,title:"Card/MucCardContainer",tags:["autodocs"],args:{onClick:i()},parameters:{docs:{description:{component:`A wrapping Layout to use with [MucCard](/docs/muccard--docs).

🔗 Patternlab-Docs (not yet available)
`}}}},e=()=>({components:{MucCardContainer:t,MucCard:r},template:`
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
    `});var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
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
})`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const l=["Template"];export{e as Template,l as __namedExportsOrder,u as default};
