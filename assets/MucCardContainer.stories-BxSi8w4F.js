import{f as i}from"./index-B-T0PRdw.js";import{M as c}from"./MucCard-CGKzjgY3.js";import{d,e as m,g as u,o as p}from"./vue.esm-bundler-lUNwqtQ9.js";import{_ as l}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"container card-container"},r=d({__name:"MucCardContainer",setup(M){return(s,_)=>(p(),m("div",C,[u(s.$slots,"default",{},void 0,!0)]))}}),t=l(r,[["__scopeId","data-v-256852e7"]]);r.__docgenInfo={exportName:"default",displayName:"MucCardContainer",description:"",tags:{},slots:[{name:"default",description:"MucCards can be put into this slot."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Card/MucCardContainer.vue"]};const y={components:{MucCardContainer:t},component:t,title:"MucCardContainer",tags:["autodocs"],args:{onClick:i()},parameters:{docs:{description:{component:`A wrapping Layout to use with [MucCard](/docs/muccard--docs).

🔗 Patternlab-Docs (not yet available)
`}}}},e=()=>({components:{MucCardContainer:t,MucCard:c},template:`
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
    `});var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
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
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["Template"];export{e as Template,x as __namedExportsOrder,y as default};
