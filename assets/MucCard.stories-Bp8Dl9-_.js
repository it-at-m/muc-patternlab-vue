import{M as o}from"./MucCard-MHgZMkpW.js";import"./iframe-abxS8dB0.js";import"./preload-helper-PPVm8Dsz.js";import"./MucDivider-0mCWmSd7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,d={component:o,title:"Card/MucCard",tags:["autodocs"],args:{onClick:r()},parameters:{docs:{description:{component:`A Card-Component in Patternlab-Style.
                
Use inside [MucCardContainer](/docs/muccardcontainer--docs) for a automatically wrapping layout.

🔗 Patternlab-Docs (not yet available)
`}}}},e={args:{title:"Lorem Ipsum",tagline:"Dolor",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},t=()=>({components:{MucCard:o},template:`
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
    `}),a={args:{title:"Lorem Ipsum",tagline:"Dolor",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",href:"https://www.muenchen.de"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem Ipsum",
    tagline: "Dolor",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    href: "https://www.muenchen.de"
  }
}`,...a.parameters?.docs?.source}}};const l=["Default","WithHeaderPrefix","WithHref"];export{e as Default,t as WithHeaderPrefix,a as WithHref,l as __namedExportsOrder,d as default};
