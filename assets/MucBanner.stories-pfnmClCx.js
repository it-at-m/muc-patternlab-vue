import{d as B,b as s,e as w,f as e,n as I,g as E,o as H}from"./vue.esm-bundler-CDraiNYW.js";const x=["role","aria-label"],M={class:"container-fluid"},S=e("svg",{class:"icon"},[e("use",{href:"#icon-information"})],-1),g=B({__name:"MucBanner",props:{type:{default:"info"}},setup(y){const t=y,b=s(()=>{switch(t.type){case"info":return"m-banner--info";case"warning":return"m-banner--warning";case"emergency":return"m-banner--emergency";default:return"m-banner--info"}}),_=s(()=>{switch(t.type){case"info":return"dialog";case"warning":return"alert";case"emergency":return"alert";default:return"dialog"}}),h=s(()=>{switch(t.type){case"info":return"Information";case"warning":return"Warnung";case"emergency":return"Emergency";default:return"Information"}});return(v,W)=>(H(),w("div",null,[e("div",null,[e("div",{class:I(["m-banner",b.value]),role:_.value,"aria-label":h.value},[e("div",M,[S,e("p",null,[E(v.$slots,"default")])])],10,x)])]))}});g.__docgenInfo={exportName:"default",displayName:"MucBanner",description:"",tags:{},props:[{name:"type",description:"Changes the style of the banner. Available types are `info`, `warning` and `emergency`.",required:!1,type:{name:"bannerType"},defaultValue:{func:!1,value:'"info"'}}],slots:[{name:"default",description:"Text-content of the banner."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Banner/MucBanner.vue"]};const C={component:g,title:"MucBanner",tags:["autodocs"],excludeStories:/.*Data$/,parameters:{docs:{description:{component:`A banner-component used for single-line informations. Available in multiple types.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-banner)
`}}}},n={args:{default:"Hi, I'm an Info-Banner!",type:"info"}},a={args:{default:"Hi, I'm a Warning-Banner!",type:"warning"}},r={args:{default:"Hi, I'm an Emergency-Banner!",type:"emergency"}};var o,c,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    default: "Hi, I'm an Info-Banner!",
    type: "info"
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,u,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    default: "Hi, I'm a Warning-Banner!",
    type: "warning"
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,d,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    default: "Hi, I'm an Emergency-Banner!",
    type: "emergency"
  }
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const D=["Default","Warning","Emergency"];export{n as Default,r as Emergency,a as Warning,D as __namedExportsOrder,C as default};
