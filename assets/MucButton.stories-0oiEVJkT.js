import{f as E}from"./index-B-T0PRdw.js";import{d as G,b as T,e as o,f as c,g as V,j as q,n as P,o as i}from"./vue.esm-bundler-lUNwqtQ9.js";const W=["disabled"],j={key:0,"aria-hidden":"true",class:"m-button__icon"},z=["xlink:href"],S=G({__name:"MucButton",props:{variant:{default:"primary"},disabled:{type:Boolean,default:!1},icon:{}},emits:["click"],setup(D,{emit:w}){const I=D,M=w,N=T(()=>{switch(I.variant){case"secondary":return"m-button--secondary";case"ghost":return"m-button--ghost";default:return"m-button--primary"}}),x=()=>{M("click")};return(e,A)=>(i(),o("button",{onClick:x,disabled:e.disabled,class:P(["m-button m-button--animated-right",N.value])},[c("span",null,[V(e.$slots,"default"),e.icon?(i(),o("svg",j,[c("use",{"xlink:href":"#icon-"+e.icon},null,8,z)])):q("",!0)])],10,W))}});S.__docgenInfo={exportName:"default",displayName:"MucButton",description:"",tags:{},props:[{name:"variant",description:"The variant prop gives you easy access to several different button styles.\n\nAvailable are `primary`, `secondary` and `ghost`.",required:!1,type:{name:"buttonType"},defaultValue:{func:!1,value:'"primary"'}},{name:"disabled",description:"Let`s you indicate that the button is not currently interactive or clickable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",description:"Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.",required:!1,type:{name:"string"}}],events:[{name:"click",description:"Triggered when button is clicked.",properties:[{type:{names:["mixed"]},description:"e Click-Event"}],tags:[{title:"param",type:{name:"mixed"},description:"e Click-Event"}]}],slots:[{name:"default",description:"Display content inside the button."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Button/MucButton.vue"]};const O={component:S,title:"MucButton",tags:["autodocs"],args:{onClick:E()},parameters:{docs:{description:{component:`The \`muc-button\` component themes the standard html button using the style from patternlab.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-buttons)
`}}}},t={args:{default:"Primary"}},a={args:{default:"Secondary",variant:"secondary"}},s={args:{default:"Ghost",variant:"ghost"}},n={args:{default:"Disabled",disabled:!0}},r={args:{default:"With Icon",icon:"arrow-right"}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    default: "Primary"
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    default: "Secondary",
    variant: "secondary"
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,b,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    default: "Ghost",
    variant: "ghost"
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    default: "Disabled",
    disabled: true
  }
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var _,B,C;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    default: "With Icon",
    icon: "arrow-right"
  }
}`,...(C=(B=r.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const $=["Default","Secondary","Ghost","Disabled","Icon"];export{t as Default,n as Disabled,s as Ghost,r as Icon,a as Secondary,$ as __namedExportsOrder,O as default};
