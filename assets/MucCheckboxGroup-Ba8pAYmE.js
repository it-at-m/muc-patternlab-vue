import{d as p,q as d,b as l,e as c,f as e,t as u,g as t,o as _,k as n,s as m,n as b,p as a,w as k}from"./vue.esm-bundler-DIzIJAKo.js";import{_ as g}from"./MucButton-Cbp7DkA3.js";const f={class:"m-form-group"},v={class:"m-checkbox-group"},x={class:"m-checkbox-group__legend"},C={class:"m-checkbox-group__heading"},w={class:"m-checkboxes m-checkboxes--collapse"},y=e("span",null,"Mehr ",-1),$={"aria-hidden":"true",class:"icon icon--after"},B=["href"],M=p({__name:"MucCheckboxGroup",props:{heading:{}},setup(N){const s=d(!0),r=l(()=>s.value?"collapse":""),i=l(()=>s.value?"down":"up"),h=()=>s.value=!s.value;return(o,S)=>(a(),c("div",f,[e("fieldset",v,[e("legend",x,[e("h3",C,u(o.heading),1)]),e("div",w,[t(o.$slots,"checkboxes"),o.$slots.collapsableCheckboxes?(a(),c("div",{key:0,class:_(["m-checkboxes__collapse__container",r.value])},[t(o.$slots,"collapsableCheckboxes")],2)):n("",!0),o.$slots.collapsableCheckboxes?(a(),m(b(g),{key:1,variant:"ghost",onClick:h,"aria-expanded":!s.value},{default:k(()=>[y,(a(),c("svg",$,[e("use",{href:"#icon-chevron-"+i.value},null,8,B)]))]),_:1},8,["aria-expanded"])):n("",!0)])])]))}});M.__docgenInfo={exportName:"default",displayName:"MucCheckboxGroup",description:"",tags:{},props:[{name:"heading",description:"Display a heading above the slots.",required:!1,type:{name:"string"}}],slots:[{name:"checkboxes",description:"Slot directly beneath the heading which will be displayed at all times."},{name:"collapsableCheckboxes",description:"Slot beneath the regular checkbox slot which will be collapsed at first."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucCheckboxGroup.vue"]};export{M as _};
