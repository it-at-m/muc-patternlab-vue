import{d as v,e as r,f as e,t as s,j as n,g as _,o as i}from"./vue.esm-bundler-lUNwqtQ9.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f={class:"m-intro m-intro-static-image",style:{"background-color":"var(--color-neutrals-blue-xlight)"}},b={class:"container"},y={style:{width:"66.6%"}},I={key:0,class:"m-intro-vertical__tagline"},k={class:"m-intro-vertical__title"},w={key:0,class:"muc-divider"},T={class:"m-intro-vertical__content"},M={style:{"padding-bottom":"32px"}},g=v({__name:"MucIntro",props:{title:{},tagline:{},divider:{type:Boolean}},setup(q){return(t,L)=>(i(),r("div",f,[e("div",b,[e("div",y,[e("div",null,[t.tagline?(i(),r("p",I,s(t.tagline),1)):n("",!0),e("h1",k,s(t.title),1)]),t.divider?(i(),r("div",w)):n("",!0),e("div",T,[e("p",M,[_(t.$slots,"default",{},void 0,!0)])])])])]))}}),S=h(g,[["__scopeId","data-v-75c8321c"]]);g.__docgenInfo={exportName:"default",displayName:"MucIntro",description:"",tags:{},props:[{name:"title",description:"Title of the Intro",required:!0,type:{name:"string"}},{name:"tagline",description:"Tagline of the Intro (above the title)",required:!0,type:{name:"string"}},{name:"divider",description:"Toggle to show a divider between title and body",required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Body of the Intro."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Intro/MucIntro.vue"]};const N={component:S,title:"MucIntro",tags:["autodocs"],parameters:{docs:{description:{component:`A header-like component which can be used as first heading for a component that replaces a whole page on muenchen.de.

Used e.g. in https://stadt.muenchen.de/buergerservice/anliegen.html.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=components-intro-vertical-article)
`}}}},o={args:{tagline:"Tagline",title:"Intro with Title",divider:!0,default:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`}},a={args:{title:"Smaller Intro with Title",default:o.args.default}};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tagline: "Tagline",
    title: "Intro with Title",
    divider: true,
    default: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\\n" + "    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Smaller Intro with Title",
    default: Default.args.default
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const j=["Default","Minimal"];export{o as Default,a as Minimal,j as __namedExportsOrder,N as default};
