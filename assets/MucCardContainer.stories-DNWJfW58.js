import{M as r}from"./MucCard-CEQSm186.js";import{M as t}from"./MucCardContainer-CMOEORk7.js";import"./iframe-nd_jh9ik.js";import"./preload-helper-Dp1pzeXC.js";import"./MucDivider-P4lSfkc4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,l={components:{MucCardContainer:t},component:t,title:"Card/MucCardContainer",tags:["autodocs"],args:{onClick:i()},parameters:{docs:{description:{component:`A wrapping Layout to use with [MucCard](/docs/muccard--docs).

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
})`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const C=["Template"];export{e as Template,C as __namedExportsOrder,l as default};
