import{I as D,O as P,d as M,b as v,e as r,t as y,p as m,x as $,P as U,y as z,q as d,w as R,f as n,A as G,E as H,o as b,F as J,l as K,j as h,m as Q}from"./vue.esm-bundler-rN7zufTY.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";function X(l,u){if(!l)return;const t=s=>{s.target!==l.value&&s.composedPath().includes(l.value)||typeof u=="function"&&u()};return D(()=>{window.addEventListener("click",t)}),P(()=>{window.removeEventListener("click",t)}),{listener:t}}const I=M({__name:"MucSelectItem",props:{item:{},itemLabel:{}},setup(l){const u=v(()=>typeof l.item=="string"?l.item:l.item[l.itemLabel].toString());return(t,s)=>(m(),r("span",null,y(u.value),1))}});I.__docgenInfo={exportName:"default",displayName:"MucSelectItem",description:"",tags:{},props:[{name:"item",description:"Individual item to display inside the MucSelect component",required:!0,type:{name:"MucSelectItemTypes"}},{name:"itemLabel",description:"A key of the `item` object, only required",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucSelectItem.vue"]};const Y={class:"m-label"},Z=["onMouseenter","onClick"],V={key:0,class:"option"},_={key:0,class:"m-hint"},T=M({__name:"MucSelect",props:$({items:{},label:{},hint:{},multiple:{type:Boolean,default:!1},noItemFoundMessage:{default:"No items found."},itemTitle:{default:"title"}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const u=U("selectComponent"),t=z(l,"modelValue"),s=d(!1),g=d(),f=d(!1),c=d(),C=()=>{s.value=!s.value,c.value=g.value},A=()=>{s.value=!0,c.value=g.value,o.value=""};X(u,()=>{s.value=!1,o.value=p.value});const S=e=>{g.value=e,l.multiple?w(e):k(e),l.multiple||(s.value=!1)},k=e=>{Array.isArray(t.value)&&(t.value=t.value.join(" ")),typeof t.value!="string"&&typeof e!="string"?t.value=t.value[l.itemTitle]===e[l.itemTitle]?"":e:t.value=t.value===e?"":e},w=e=>{Array.isArray(t.value)||(t.value=[t.value]),Array.isArray(t.value)&&(typeof e=="string"?t.value=t.value.map(i=>i).includes(e)?t.value.filter(i=>i!==e):[...t.value,e]:t.value=t.value.map(i=>i[l.itemTitle]).includes(e[l.itemTitle])?t.value.filter(i=>i[l.itemTitle]!==e[l.itemTitle]):[...t.value,e])},p=v(()=>typeof t.value=="string"?t.value:Array.isArray(t.value)?t.value.every(e=>typeof e=="string")?t.value.join(l.multiple?", ":" "):t.value.map(e=>e[l.itemTitle].toString()).join(l.multiple?", ":" "):t.value[l.itemTitle].toString());R(p,e=>{o.value=e});const o=d(p.value),L=v(()=>o.value==p.value?l.items:q(o.value)),q=e=>{f.value=!1;const i=l.items.every(a=>typeof a=="string")?l.items.filter(a=>a.toLowerCase().includes(e.toLowerCase())):l.items.filter(a=>a[l.itemTitle].toString().toLowerCase().includes(e.toLowerCase()));return i.length===0&&(f.value=!0),i},x=e=>e===c.value?"active":"",F=e=>{if(typeof e=="string")return t.value.includes(e)?"selected":"";if(Array.isArray(t.value))return t.value.map(i=>i[l.itemTitle]).includes(e[l.itemTitle])?"selected":"";if(typeof t.value!="string")return t.value[l.itemTitle]===e[l.itemTitle]?"selected":""},N=()=>c.value="",O=v(()=>s.value?"display-listbox":""),j=v(()=>l.multiple&&!f.value?"m-input-wrapper--multiselect multiselect":"m-input-wrapper--select");return(e,i)=>(m(),r("div",{class:"m-form-group",ref_key:"selectComponent",ref:u},[n("label",Y,y(e.label),1),n("div",{class:b(["m-input-wrapper",j.value])},[G(n("input",{type:"text",class:"m-input m-combobox m-combobox--single","onUpdate:modelValue":i[0]||(i[0]=a=>o.value=a),onClick:A},null,512),[[H,o.value]]),n("span",{class:"m-input__trigger",onClick:C},i[1]||(i[1]=[n("svg",{"aria-hidden":"true",class:"icon"},[n("use",{"xlink:href":"#icon-chevron-down"})],-1),n("span",{class:"visually-hidden"},"Auswahlliste öffnen",-1)])),n("ul",{class:b(["listbox",O.value]),onMouseleave:N},[(m(!0),r(J,null,K(L.value,(a,B)=>(m(),r("li",{key:B,class:b(["option",[x(a),F(a)]]),onMouseenter:E=>c.value=a,onClick:E=>S(a)},[Q(I,{item:a,"item-label":e.itemTitle},null,8,["item","item-label"])],42,Z))),128)),f.value?(m(),r("li",V,y(e.noItemFoundMessage),1)):h("",!0)],34)],2),e.hint?(m(),r("p",_,y(e.hint),1)):h("",!0)],512))}}),le=W(T,[["__scopeId","data-v-a65ab70d"]]);T.__docgenInfo={exportName:"default",displayName:"MucSelect",description:"",tags:{},props:[{name:"items",description:"List of items to be available",required:!0,type:{name:"Array",elements:[{name:"MucSelectItemTypes"}]}},{name:"label",description:"Optional label shown above the input",required:!1,type:{name:"string"}},{name:"hint",description:"Optional hint shown below the input",required:!1,type:{name:"string"}},{name:"multiple",description:"Allow multiple selectable items",required:!1,type:{name:"boolean"}},{name:"noItemFoundMessage",description:"Optional message shown no item is found after filtering",required:!1,type:{name:"string"}},{name:"itemTitle",description:"Property that contains the value to be displayed in the list when a list of objects is used",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucSelect.vue"]};export{le as M};