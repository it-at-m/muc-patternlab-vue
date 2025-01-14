import{d as h,q as u,b as c,e as l,f as e,t as m,g as n,o as b,j as r,s as _,v as k,n as g,p as a}from"./vue.esm-bundler-rN7zufTY.js";import{M as v}from"./MucButton-HLjavNH4.js";const f={class:"m-form-group"},x={class:"m-checkbox-group"},C={class:"m-checkbox-group__legend"},y={class:"m-checkbox-group__heading"},w={class:"m-checkboxes m-checkboxes--collapse"},M={"aria-hidden":"true",class:"icon icon--after"},B=["href"],N=h({__name:"MucCheckboxGroup",props:{heading:{}},setup(S){const s=u(!0),i=c(()=>s.value?"collapse":""),p=c(()=>s.value?"down":"up"),d=()=>s.value=!s.value;return(o,t)=>(a(),l("div",f,[e("fieldset",x,[e("legend",C,[e("h3",y,m(o.heading),1)]),e("div",w,[n(o.$slots,"checkboxes"),o.$slots.collapsableCheckboxes?(a(),l("div",{key:0,class:b(["m-checkboxes__collapse__container",i.value])},[n(o.$slots,"collapsableCheckboxes")],2)):r("",!0),o.$slots.collapsableCheckboxes?(a(),_(g(v),{key:1,variant:"ghost",onClick:d,"aria-expanded":!s.value},{default:k(()=>[t[0]||(t[0]=e("span",null,"Mehr ",-1)),(a(),l("svg",M,[e("use",{href:"#icon-chevron-"+p.value},null,8,B)]))]),_:1},8,["aria-expanded"])):r("",!0)])])]))}});N.__docgenInfo={exportName:"default",displayName:"MucCheckboxGroup",description:"",tags:{},props:[{name:"heading",description:"Display a heading above the slots.",required:!1,type:{name:"string"}}],slots:[{name:"checkboxes",description:"Slot directly beneath the heading which will be displayed at all times."},{name:"collapsableCheckboxes",description:"Slot beneath the regular checkbox slot which will be collapsed at first."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucCheckboxGroup.vue"]};export{N as _};