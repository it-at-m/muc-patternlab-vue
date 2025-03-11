import{d as k,x as p,y as q,k as C,b as m,e as i,l as r,f as o,s as x,n as c,t as l,A as w,j as M,B as I,F as S,p as V,v as D,o as t,m as L}from"./vue.esm-bundler-CDd4cxOR.js";import{F as B}from"./FormErrorMessage-CXJc7XyP.js";const F=["for"],N=["id"],T={class:"m-input-wrapper m-autocomplete"},E={key:0,class:"m-input__prefix"},_=["id","type","aria-describedby","placeholder","required","maxlength"],A={key:1,class:"autocomplete-result-list autocomplete-result-list--location"},O=["onClick"],R={"aria-hidden":"true",class:"icon"},U=["xlink:href"],$=k({__name:"MucInput",props:p({id:{},errorMsg:{},placeholder:{},required:{type:Boolean,default:!1},label:{},hint:{},type:{default:"text"},dataList:{default:()=>[]},suffixIcon:{},max:{}},{modelValue:{default:""},modelModifiers:{}}),emits:p(["suffixClick"],["update:modelValue"]),setup(u,{emit:f}){const a=q(u,"modelValue"),h=C(),y=f,g=m(()=>u.type==="search"),d=m(()=>{if(a.value==="")return[];const e=a.value.toLowerCase();return u.dataList.filter(s=>s.toLowerCase().startsWith(e)&&s.toLowerCase()!==e)}),b=e=>a.value=e,v=()=>y("suffixClick");return(e,s)=>(t(),i("div",{class:c(["m-form-group",{"has-error":e.errorMsg}])},[e.label?(t(),i("label",{key:0,for:"input-"+e.id,class:c(["m-label",{"m-label--optional":!e.required}])},l(e.label),11,F)):r("",!0),e.hint?(t(),i("p",{key:1,class:"m-hint",id:"input-hint-"+e.id},l(e.hint),9,N)):r("",!0),o("div",T,[h.prefix?(t(),i("div",E,[o("span",null,[M(e.$slots,"prefix")])])):r("",!0),w(o("input",{id:"input-"+e.id,class:"m-input autocomplete-input",type:e.type,"onUpdate:modelValue":s[0]||(s[0]=n=>a.value=n),"aria-describedby":e.hint?"input-hint-"+e.id:void 0,placeholder:e.placeholder,required:e.required,maxlength:e.max},null,8,_),[[I,a.value]]),g.value&&d.value.length!==0?(t(),i("ul",A,[(t(!0),i(S,null,V(d.value,n=>(t(),i("li",{class:"autocomplete-result",key:n,onClick:j=>b(n)},l(n),9,O))),128))])):r("",!0),e.suffixIcon?(t(),i("button",{key:2,class:"m-input__suffix",onClick:v},[(t(),i("svg",R,[o("use",{"xlink:href":"#icon-"+e.suffixIcon},null,8,U)])),s[1]||(s[1]=o("span",{class:"visually-hidden"},"Suchen",-1))])):r("",!0)]),e.errorMsg?(t(),x(B,{key:2,id:"text-input-error",tabindex:"0",role:"alert","aria-live":"polite"},{default:D(()=>[L(l(e.errorMsg),1)]),_:1})):r("",!0)],2))}});$.__docgenInfo={exportName:"default",displayName:"MucInput",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the input. Required property used to associate the input with its label and hint text for accessibility.",required:!0,type:{name:"string"}},{name:"errorMsg",description:"Displays error message and highlights the input form with a red border.",required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder for empty input form.",required:!1,type:{name:"string"}},{name:"required",description:"Sets this input form as required. Default is wrong.",required:!1,type:{name:"boolean"}},{name:"label",description:"Displays a label above the form component.",required:!1,type:{name:"string"}},{name:"hint",description:"Displays a hint beneath the form component.",required:!1,type:{name:"string"}},{name:"type",description:"Sets the type of this form component. This can be text, password, color, date or datetime-local.",required:!1,type:{name:"InputType"}},{name:"dataList",description:"Options for the form component. Type must set to 'search'.",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"suffixIcon",description:"Icon to be displayed as a suffix at the end of the input.",required:!1,type:{name:"string"}},{name:"max",description:"Restricts character input to the specified number",required:!1,type:{name:"number"}}],events:[{name:"suffixClick",description:"Triggered when suffix-button is clicked.",properties:[{type:{names:["mixed"]},description:"e Click-Event"}],tags:[{title:"param",type:{name:"mixed"},description:"e Click-Event"}]}],slots:[{name:"prefix",description:"Slot in front of the user input with divider."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucInput.vue"]};export{$ as _};
