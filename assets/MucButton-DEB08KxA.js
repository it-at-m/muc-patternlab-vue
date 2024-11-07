import{d as u,b as a,e as d,f as m,g as p,s as f,n as b,k as y,o as h,p as n}from"./vue.esm-bundler-Dxwp2idO.js";import{_ as v}from"./MucIcon-DnuNrOqz.js";const k=["disabled"],g=u({__name:"MucButton",props:{variant:{default:"primary"},disabled:{type:Boolean,default:!1},icon:{},iconAnimated:{type:Boolean,default:!1}},emits:["click"],setup(o,{emit:s}){const t=o,i=s,r=a(()=>{switch(t.variant){case"secondary":return"m-button--secondary";case"ghost":return"m-button--ghost";default:return"m-button--primary"}}),l=a(()=>t.iconAnimated?"m-button--animated-right":""),c=()=>{i("click")};return(e,_)=>(n(),d("button",{onClick:c,disabled:e.disabled,class:h(["m-button",[r.value,l.value]])},[m("span",null,[p(e.$slots,"default"),e.icon?(n(),f(b(v),{key:0,icon:e.icon,class:"m-button__icon"},null,8,["icon"])):y("",!0)])],10,k))}});g.__docgenInfo={exportName:"default",displayName:"MucButton",description:"",tags:{},props:[{name:"variant",description:"The variant prop gives you easy access to several different button styles.\n\nAvailable are `primary`, `secondary` and `ghost`.",required:!1,type:{name:"buttonType"},defaultValue:{func:!1,value:'"primary"'}},{name:"disabled",description:"Let`s you indicate that the button is not currently interactive or clickable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",description:"Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.",required:!1,type:{name:"string"}},{name:"iconAnimated",description:"Wether the Icon should be animated on hover (slide-right) or not.\n\nDefault is `false`",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Triggered when button is clicked.",properties:[{type:{names:["mixed"]},description:"e Click-Event"}],tags:[{title:"param",type:{name:"mixed"},description:"e Click-Event"}]}],slots:[{name:"default",description:"Display content inside the button."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Button/MucButton.vue"]};export{g as _};
