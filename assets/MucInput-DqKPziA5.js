import{d as x,x as m,y as C,u as q,b as d,e as r,f as a,k as p,t as u,j as n,g as M,A as w,B as I,F as S,l as _,s as V,v as D,o as L,p as s}from"./vue.esm-bundler-rN7zufTY.js";import{F as B}from"./FormErrorMessage-DJZKPSHQ.js";const F={for:"search-input",class:"m-label"},E={key:0,"aria-hidden":"true",class:"mandatory"},N={class:"m-input-wrapper m-autocomplete"},T={key:0,class:"m-input__prefix"},A=["type","aria-describedby","placeholder","required"],O={key:1,class:"autocomplete-result-list autocomplete-result-list--location"},$=["onClick"],j={"aria-hidden":"true",class:"icon"},z=["xlink:href"],P={class:"m-hint",id:"text-input-hint"},U=x({__name:"MucInput",props:m({errorMsg:{},placeholder:{},required:{type:Boolean,default:!1},label:{},hint:{},type:{default:"text"},dataList:{default:()=>[]},suffixIcon:{}},{modelValue:{default:""},modelModifiers:{}}),emits:m(["suffixClick"],["update:modelValue"]),setup(l,{emit:f}){const i=C(l,"modelValue"),h=q(),y=f,g=d(()=>l.errorMsg?"has-error":""),v=d(()=>l.type==="search"),c=d(()=>{if(i.value==="")return[];const e=i.value.toLowerCase();return l.dataList.filter(t=>t.toLowerCase().startsWith(e)&&t.toLowerCase()!==e)}),k=e=>i.value=e,b=()=>y("suffixClick");return(e,t)=>(s(),r("div",{class:L(["m-form-group",g.value])},[a("label",F,[p(u(e.label)+" ",1),e.required?(s(),r("span",E,t[1]||(t[1]=[p(" * "),a("span",{class:"visually-hidden"},"(erforderlich)",-1)]))):n("",!0)]),a("div",N,[h.prefix?(s(),r("div",T,[a("span",null,[M(e.$slots,"prefix")])])):n("",!0),w(a("input",{class:"m-input autocomplete-input",type:e.type,"onUpdate:modelValue":t[0]||(t[0]=o=>i.value=o),"aria-describedby":e.type+"-input",placeholder:e.placeholder,required:e.required},null,8,A),[[I,i.value]]),v.value&&c.value.length!==0?(s(),r("ul",O,[(s(!0),r(S,null,_(c.value,o=>(s(),r("li",{class:"autocomplete-result",key:o,onClick:W=>k(o)},u(o),9,$))),128))])):n("",!0),e.suffixIcon?(s(),r("button",{key:2,class:"m-input__suffix",onClick:b},[(s(),r("svg",j,[a("use",{"xlink:href":"#icon-"+e.suffixIcon},null,8,z)])),t[2]||(t[2]=a("span",{class:"visually-hidden"},"Suchen",-1))])):n("",!0)]),a("p",P,u(e.hint),1),e.errorMsg?(s(),V(B,{key:0,id:"text-input-error"},{default:D(()=>[p(u(e.errorMsg),1)]),_:1})):n("",!0)],2))}});U.__docgenInfo={exportName:"default",displayName:"MucInput",description:"",tags:{},props:[{name:"errorMsg",description:"Displays error message and highlights the input form with a red border.",required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder for empty input form.",required:!1,type:{name:"string"}},{name:"required",description:"Sets this input form as required. Default is wrong.",required:!1,type:{name:"boolean"}},{name:"label",description:"Displays a label above the form component.",required:!1,type:{name:"string"}},{name:"hint",description:"Displays a hint beneath the form component.",required:!1,type:{name:"string"}},{name:"type",description:"Sets the type of this form component. This can be text, password, color, date or datetime-local.",required:!1,type:{name:"InputType"}},{name:"dataList",description:"Options for the form component. Type must set to 'search'.",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"suffixIcon",description:"Icon to be displayed as a suffix at the end of the input.",required:!1,type:{name:"string"}}],events:[{name:"suffixClick",description:"Triggered when suffix-button is clicked.",properties:[{type:{names:["mixed"]},description:"e Click-Event"}],tags:[{title:"param",type:{name:"mixed"},description:"e Click-Event"}]}],slots:[{name:"prefix",description:"Slot in front of the user input with divider."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucInput.vue"]};export{U as _};