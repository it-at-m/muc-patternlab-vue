import{d as p,u as f,b as n,e as b,f as y,g as h,s as v,o as a,n as o,j as g,p as s}from"./vue.esm-bundler-BeGYTx_4.js";import{_ as k}from"./MucIcon-Da7jEBmO.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B=["disabled"],i=p({__name:"MucButton",props:{variant:{default:"primary"},disabled:{type:Boolean,default:!1},icon:{},iconAnimated:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:r}){const c=f(),l=r,d=n(()=>{switch(t.variant){case"secondary":return"m-button--secondary";case"ghost":return"m-button--ghost";default:return"m-button--primary"}}),u=n(()=>t.iconAnimated?"m-button--animated-right":""),m=()=>{l("click")};return(e,C)=>(s(),b("button",{onClick:m,disabled:e.disabled,class:a(["m-button",[d.value,u.value]])},[y("span",null,[h(e.$slots,"default",{},void 0,!0),e.icon?(s(),v(o(k),{key:0,icon:e.icon,class:a(["m-button__icon",{"no-left-margin":!o(c).default}])},null,8,["icon","class"])):g("",!0)])],10,B))}}),q=_(i,[["__scopeId","data-v-d002b2f9"]]);i.__docgenInfo={exportName:"default",displayName:"MucButton",description:"",tags:{},props:[{name:"variant",description:"The variant prop gives you easy access to several different button styles.\n\nAvailable are `primary`, `secondary` and `ghost`.",required:!1,type:{name:"buttonType"}},{name:"disabled",description:"Let`s you indicate that the button is not currently interactive or clickable.",required:!1,type:{name:"boolean"}},{name:"icon",description:"Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.",required:!1,type:{name:"string"}},{name:"iconAnimated",description:"Wether the Icon should be animated on hover (slide-right) or not.\n\nDefault is `false`",required:!1,type:{name:"boolean"}}],events:[{name:"click",description:"Triggered when button is clicked.",properties:[{type:{names:["mixed"]},description:"e Click-Event"}],tags:[{title:"param",type:{name:"mixed"},description:"e Click-Event"}]}],slots:[{name:"default",description:"Display content inside the button."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Button/MucButton.vue"]};export{q as M};
