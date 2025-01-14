import{d as b,u as y,b as n,e as v,f as g,g as o,j as a,s as k,o as i,n as w,p as s}from"./vue.esm-bundler-rN7zufTY.js";import{_ as B}from"./MucIcon-vGihVT0q.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S=["aria-disabled"],r=b({__name:"MucButton",props:{variant:{default:"primary"},disabled:{type:Boolean,default:!1},icon:{},iconAnimated:{type:Boolean,default:!1},iconShownLeft:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:l}){const c=y(),d=l,u=n(()=>{switch(e.variant){case"secondary":return"m-button--secondary";case"ghost":return"m-button--ghost";default:return"m-button--primary"}}),m=n(()=>e.iconAnimated&&e.iconShownLeft?"m-button--animated-left":e.iconAnimated?"m-button--animated-right":""),f=n(()=>({"set-right-margin":e.iconShownLeft,"no-left-margin":e.iconShownLeft?!e.iconAnimated:!c.default})),p=()=>{e.disabled||d("click")},h=n(()=>e.disabled?"disabled":"");return(t,L)=>(s(),v("button",{onClick:p,"aria-disabled":t.disabled,class:i(["m-button",[u.value,m.value,h.value]])},[g("span",null,[t.iconShownLeft?a("",!0):o(t.$slots,"default",{key:0},void 0,!0),t.icon?(s(),k(w(B),{key:1,icon:t.icon,class:i(["m-button__icon",f.value])},null,8,["icon","class"])):a("",!0),t.iconShownLeft?o(t.$slots,"default",{key:2},void 0,!0):a("",!0)])],10,S))}}),N=C(r,[["__scopeId","data-v-07f58200"]]);r.__docgenInfo={exportName:"default",displayName:"MucButton",description:"",tags:{},props:[{name:"variant",description:"The variant prop gives you easy access to several different button styles.\n\nAvailable are `primary`, `secondary` and `ghost`.",required:!1,type:{name:"buttonType"}},{name:"disabled",description:"Lets you indicate that the button is not currently interactive or clickable.",required:!1,type:{name:"boolean"}},{name:"icon",description:"Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.",required:!1,type:{name:"string"}},{name:"iconAnimated",description:"Whether the Icon should be animated on hover (slide-right) or not.\n\nDefault is `false`",required:!1,type:{name:"boolean"}},{name:"iconShownLeft",description:"Whether the Icon should be shown on the left side of the button (slide-right) or not.\n\nDefault is `false`",required:!1,type:{name:"boolean"}}],events:[{name:"click",description:"Triggered when button is clicked.",properties:[{type:{names:["mixed"]},description:"e Click-Event"}],tags:[{title:"param",type:{name:"mixed"},description:"e Click-Event"}]}],slots:[{name:"default",description:"Display content inside the button."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Button/MucButton.vue"]};export{N as M};
