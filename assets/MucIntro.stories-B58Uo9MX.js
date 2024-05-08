import{d as _,e as r,f as e,t as n,j as s,g as v,o as i}from"./vue.esm-bundler-lUNwqtQ9.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f={class:"m-intro m-intro-vertical"},b={class:"m-intro-vertical__body"},y={class:"container"},I={class:"m-intro-vertical__grid"},k={class:"m-intro-vertical__grid-inner"},T={key:0,class:"m-intro-vertical__tagline"},w={class:"m-intro-vertical__title"},M={key:1,class:"muc-divider"},S={class:"m-intro-vertical__content"},g=_({__name:"MucIntro",props:{title:{},tagline:{},divider:{type:Boolean}},setup(L){return(t,D)=>(i(),r("div",f,[e("div",b,[e("div",y,[e("div",I,[e("div",k,[t.tagline?(i(),r("span",T,n(t.tagline),1)):s("",!0),e("h1",w,n(t.title),1),t.divider?(i(),r("div",M)):s("",!0),e("div",S,[e("p",null,[v(t.$slots,"default",{},void 0,!0)])])])])])])]))}}),q=h(g,[["__scopeId","data-v-27d2b655"]]);g.__docgenInfo={exportName:"default",displayName:"MucIntro",description:"",tags:{},props:[{name:"title",description:"Title of the Intro",required:!0,type:{name:"string"}},{name:"tagline",description:"Tagline of the Intro (above the title)",required:!0,type:{name:"string"}},{name:"divider",description:"Toggle to show a divider between title and body",required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Text-content of the Intro."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Intro/MucIntro.vue"]};const j={component:q,title:"MucIntro",tags:["autodocs"],parameters:{docs:{description:{component:`A header-like component which can be used as first heading for a component that replaces a whole page on muenchen.de.

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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Smaller Intro with Title",
    default: Default.args.default
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const A=["Default","Minimal"];export{o as Default,a as Minimal,A as __namedExportsOrder,j as default};
