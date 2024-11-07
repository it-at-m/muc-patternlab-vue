import{d as c,b as n,e as m,f as o,z as b,k as f,t as d,j as _,K as g,p,x as u,y,L as v,M as B,N as R,g as k}from"./vue.esm-bundler-BeGYTx_4.js";const h=Symbol("mucRadioGroup"),M={key:0,class:"m-radios__item"},V=["checked","disabled"],N={class:"m-hint"},w=c({__name:"MucRadioButton",props:{value:{},label:{},hint:{},disabled:{type:Boolean,default:!1}},setup(t){const e=g(h),s=()=>e==null?void 0:e.set(t.value),i=n(()=>(e==null?void 0:e.modelValue.value)===t.value),a=n(()=>t.disabled||(e==null?void 0:e.disabled.value)),l=n(()=>(e==null?void 0:e.disabled)??!1);return(r,$)=>l.value?(p(),m("div",M,[o("input",{class:"m-radios__input",type:"radio",checked:i.value,disabled:a.value,onClick:b(s,["stop"])},null,8,V),o("label",{class:"m-label m-radios__label",onClick:s},[f(d(r.label)+" ",1),o("span",N,d(r.hint),1)])])):_("",!0)}});w.__docgenInfo={exportName:"default",displayName:"MucRadioButton",description:"",tags:{},props:[{name:"value",description:"value for this radiobutton",required:!0,type:{name:"string"}},{name:"label",description:"Optional label shown behind the radiobutton",required:!1,type:{name:"string"}},{name:"hint",description:"Optional hint shown beneath the radiobutton",required:!1,type:{name:"string"}},{name:"disabled",description:"Optionally disable this specific radiobutton",required:!1,type:{name:"boolean"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucRadioButton.vue"]};const q={class:"m-form-group"},G={class:"m-radio-group"},O={class:"m-radio-group__legend"},x={class:"m-radio-group__heading"},C={class:"m-radios"},T=c({__name:"MucRadioButtonGroup",props:u({heading:{},disabled:{type:Boolean,default:!1}},{modelValue:{type:[Boolean,String,Array,Object,Number,null]},modelModifiers:{}}),emits:u(["change"],["update:modelValue"]),setup(t,{emit:e}){const s=y(t,"modelValue"),i=e;return v(h,{set:a=>{i("change",a),s.value=a},modelValue:s,disabled:B(R(()=>t.disabled))}),(a,l)=>(p(),m("div",q,[o("fieldset",G,[o("legend",O,[o("h3",x,d(a.heading),1)]),o("div",C,[k(a.$slots,"default")])])]))}});T.__docgenInfo={exportName:"default",displayName:"MucRadioButtonGroup",description:"",tags:{},props:[{name:"heading",description:"Optional heading above all radiobuttons as a group heading",required:!1,type:{name:"string"}},{name:"disabled",description:"Optionally disable all child radiobuttons - defaults to 'false'",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["RadioButtonValueTypes"]},description:"Triggered when a different radiobutton is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"RadioButtonValueTypes the value of the newly selected radiobutton"}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"RadioButtonValueTypes the value of the newly selected radiobutton"}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucRadioButtonGroup.vue"]};export{w as _,T as a};
