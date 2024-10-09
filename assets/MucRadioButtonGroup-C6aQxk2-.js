import{d as p,b as l,e as m,f as o,z as f,j as _,t as d,k as g,K as y,p as h,x as c,y as v,L as B,M as R,N as V,g as k}from"./vue.esm-bundler-Dxwp2idO.js";const b=Symbol("mucRadioGroup"),M={key:0,class:"m-radios__item"},N=["checked","disabled"],w={class:"m-hint"},q=p({__name:"MucRadioButton",props:{value:{},label:{},hint:{},disabled:{type:Boolean,default:!1}},setup(s){const t=s,e=y(b),n=()=>e==null?void 0:e.set(t.value),i=l(()=>(e==null?void 0:e.modelValue.value)===t.value),a=l(()=>t.disabled||(e==null?void 0:e.disabled.value)),u=l(()=>(e==null?void 0:e.disabled)??!1);return(r,F)=>u.value?(h(),m("div",M,[o("input",{class:"m-radios__input",type:"radio",checked:i.value,disabled:a.value,onClick:f(n,["stop"])},null,8,N),o("label",{class:"m-label m-radios__label",onClick:n},[_(d(r.label)+" ",1),o("span",w,d(r.hint),1)])])):g("",!0)}});q.__docgenInfo={exportName:"default",displayName:"MucRadioButton",description:"",tags:{},props:[{name:"value",description:"value for this radiobutton",required:!0,type:{name:"string"}},{name:"label",description:"Optional label shown behind the radiobutton",required:!1,type:{name:"string"}},{name:"hint",description:"Optional hint shown beneath the radiobutton",required:!1,type:{name:"string"}},{name:"disabled",description:"Optionally disable this specific radiobutton",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucRadioButton.vue"]};const G={class:"m-form-group"},O={class:"m-radio-group"},x={class:"m-radio-group__legend"},C={class:"m-radio-group__heading"},T={class:"m-radios"},$=p({__name:"MucRadioButtonGroup",props:c({heading:{},disabled:{type:Boolean,default:!1}},{modelValue:{type:[Boolean,String,Array,Object,Number,null]},modelModifiers:{}}),emits:c(["change"],["update:modelValue"]),setup(s,{emit:t}){const e=v(s,"modelValue"),n=s,i=t;return B(b,{set:a=>{i("change",a),e.value=a},modelValue:e,disabled:R(V(n.disabled))}),(a,u)=>(h(),m("div",G,[o("fieldset",O,[o("legend",x,[o("h3",C,d(a.heading),1)]),o("div",T,[k(a.$slots,"default")])])]))}});$.__docgenInfo={exportName:"default",displayName:"MucRadioButtonGroup",description:"",tags:{},props:[{name:"heading",description:"Optional heading above all radiobuttons as a group heading",required:!1,type:{name:"string"}},{name:"disabled",description:"Optionally disable all child radiobuttons - defaults to 'false'",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"change",type:{names:["RadioButtonValueTypes"]},description:"Triggered when a different radiobutton is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"RadioButtonValueTypes the value of the newly selected radiobutton"}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"RadioButtonValueTypes the value of the newly selected radiobutton"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucRadioButtonGroup.vue"]};export{q as _,$ as a};
