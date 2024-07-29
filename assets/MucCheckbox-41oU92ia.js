import{d as n,v as c,x as r,e as m,f as o,y as p,t as d,p as u}from"./vue.esm-bundler-DIzIJAKo.js";const h=["checked"],k={class:"m-label m-checkboxes__label"},b=n({__name:"MucCheckbox",props:c({label:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:c(["click"],["update:modelValue"]),setup(s,{emit:a}){const e=r(s,"modelValue"),i=a,t=()=>{e.value=!e.value,i("click")};return(l,_)=>(u(),m("div",{class:"m-checkboxes__item",onClick:t},[o("input",{class:"m-checkboxes__input",name:"checkbox",type:"checkbox",checked:e.value,onClick:p(t,["stop"])},null,8,h),o("label",k,d(l.label),1)]))}});b.__docgenInfo={exportName:"default",displayName:"MucCheckbox",description:"",tags:{},props:[{name:"label",description:"Label is displayed to the right of the checkbox as information for the user.",required:!0,type:{name:"string"}}],events:[{name:"click",description:"Emits every time the checkbox or the label is clicked - thus switching the state.",properties:[{type:{names:["mixed"]},description:"e emits the click event."}],tags:[{title:"param",type:{name:"mixed"},description:"e emits the click event."}]}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucCheckbox.vue"]};export{b as _};
