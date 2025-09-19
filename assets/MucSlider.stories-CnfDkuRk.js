import{M as m}from"./MucCard-DwAy8iTS.js";import{M as t,_ as a}from"./MucSliderItem-DzBg-IOH.js";import"./iframe-CthIt4Xg.js";import"./preload-helper-Dp1pzeXC.js";import"./MucDivider-CalOjLtI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={components:{MucSliderItem:a,MucSlider:t},component:t,title:"MucSlider",tags:["autodocs"],parameters:{docs:{description:{component:`A wrapping layout to show elements in a carousel and slide them, for example [MucCards](/docs/muccard--docs).

🔗 Patternlab-Docs (https://patternlab.muenchen.space/?p=components-slider-quote)
`}}}},e=()=>({components:{MucCard:m,MucSlider:t,MucSliderItem:a},template:`
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
    `});var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => ({
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
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const M=["Template"];export{e as Template,M as __namedExportsOrder,p as default};
