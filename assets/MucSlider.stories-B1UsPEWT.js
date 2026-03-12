import{M as n}from"./MucCard-CvrciJ3t.js";import{_ as r,M as t}from"./MucSliderItem-ChF_il9x.js";import"./iframe-CeNjih2_.js";import"./preload-helper-PPVm8Dsz.js";import"./MucDivider-D2Yso-Ae.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={components:{MucSliderItem:r,MucSlider:t},component:t,title:"MucSlider",tags:["autodocs"],parameters:{docs:{description:{component:`A wrapping layout to show elements in a carousel and slide them, for example [MucCards](/docs/muccard--docs).

🔗 Patternlab-Docs (https://patternlab.muenchen.space/?p=components-slider-quote)
`}}}},e=()=>({components:{MucCard:n,MucSlider:t,MucSliderItem:r},template:`
      <MucSlider>
        <MucSliderItem v-for="index in 5" :key="index">
          <MucCard
              title="Lorem Ipsum"
              tagline="Dolor"
              href="https://www.muenchen.de"
          >
            <template #content>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua.
            </template>
          </MucCard>
        </MucSliderItem>
      </MucSlider>
    `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCard,
    MucSlider,
    MucSliderItem
  },
  template: \`
      <MucSlider>
        <MucSliderItem v-for="index in 5" :key="index">
          <MucCard
              title="Lorem Ipsum"
              tagline="Dolor"
              href="https://www.muenchen.de"
          >
            <template #content>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua.
            </template>
          </MucCard>
        </MucSliderItem>
      </MucSlider>
    \`
})`,...e.parameters?.docs?.source}}};const l=["Template"];export{e as Template,l as __namedExportsOrder,c as default};
