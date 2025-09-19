import{M as m}from"./MucCard-DwAy8iTS.js";import"./iframe-CthIt4Xg.js";import"./preload-helper-Dp1pzeXC.js";import"./MucDivider-CalOjLtI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,v={component:m,title:"Card/MucCard",tags:["autodocs"],args:{onClick:d()},parameters:{docs:{description:{component:`A Card-Component in Patternlab-Style.
                
Use inside [MucCardContainer](/docs/muccardcontainer--docs) for a automatically wrapping layout.

🔗 Patternlab-Docs (not yet available)
`}}}},e={args:{title:"Lorem Ipsum",tagline:"Dolor",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},t=()=>({components:{MucCard:m},template:`
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
    `});var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: "Lorem Ipsum",
    tagline: "Dolor",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => ({
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
})`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const b=["Default","WithHeaderPrefix"];export{e as Default,t as WithHeaderPrefix,b as __namedExportsOrder,v as default};
