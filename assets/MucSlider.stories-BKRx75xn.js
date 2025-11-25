import{M as o}from"./MucCard-Bn_GpR2c.js";import{M as t,_ as r}from"./MucSliderItem-Kcg0KT8Y.js";import"./iframe-Caa849X8.js";import"./preload-helper-PPVm8Dsz.js";import"./MucDivider-CKdbwkgS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={components:{MucSliderItem:r,MucSlider:t},component:t,title:"MucSlider",tags:["autodocs"],parameters:{docs:{description:{component:`A wrapping layout to show elements in a carousel and slide them, for example [MucCards](/docs/muccard--docs).

🔗 Patternlab-Docs (https://patternlab.muenchen.space/?p=components-slider-quote)
`}}}},e=()=>({components:{MucCard:o,MucSlider:t,MucSliderItem:r},template:`
      <MucSlider>
        <MucSliderItem v-for="index in 5" :key="index">
          <MucCard
              title="Lorem Ipsum"
              tagline="Dolor"
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
