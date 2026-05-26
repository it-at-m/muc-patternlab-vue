import{i as e}from"./preload-helper-Cs4UwXAW.js";import{n as t,t as n}from"./MucCard-D_58lpFK.js";import{n as r,t as i}from"./MucCardContainer-DVolKxTt.js";var a,o,s,c;e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={components:{MucCardContainer:i},component:i,title:`Card/MucCardContainer`,tags:[`autodocs`],args:{onClick:a()},parameters:{docs:{description:{component:`A wrapping Layout to use with [MucCard](/docs/muccard--docs).

🔗 Patternlab-Docs (not yet available)
`}}}},s=()=>({components:{MucCardContainer:i,MucCard:n},template:`
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
    `}),s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => ({
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
})`,...s.parameters?.docs?.source}}},c=[`Template`]}))();export{s as Template,c as __namedExportsOrder,o as default};