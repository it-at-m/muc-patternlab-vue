import{d as x,b as c,e as u,f as e,g as l,n as M,o as i}from"./vue.esm-bundler-lUNwqtQ9.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $=["aria-label"],B={class:"m-callout__inner"},L={class:"m-callout__icon"},N={"aria-hidden":"true",class:"icon"},T=["xlink:href"],A={class:"m-callout__body"},V={class:"m-callout__body__inner"},q={class:"m-callout__headline"},z={class:"m-callout__content"},S=x({__name:"MucCallout",props:{type:{default:"info"}},setup(E){const o=E,k=c(()=>{switch(o.type){case"error":return"warning";case"success":return"check";default:return"information"}}),D=c(()=>{switch(o.type){case"error":return"m-callout--error";case"warning":return"m-callout--warning";case"success":return"m-callout--success";default:return"m-callout--default"}}),I=c(()=>{switch(o.type){case"success":return"Erfolgreich";case"warning":return"Warnung";case"error":return"Error";default:return"Information"}});return(n,H)=>(i(),u("div",{class:M(["m-callout",D.value]),"aria-label":I.value},[e("div",B,[e("div",L,[l(n.$slots,"icon",{},()=>[(i(),u("svg",N,[e("use",{"xlink:href":`#icon-${k.value}`},null,8,T)]))],!0)]),e("div",A,[e("div",V,[e("div",q,[l(n.$slots,"header",{},void 0,!0)]),e("div",z,[e("p",null,[l(n.$slots,"content",{class:"m-callout__content"},void 0,!0)])])])])])],10,$))}}),F=W(S,[["__scopeId","data-v-efad4956"]]);S.__docgenInfo={exportName:"default",displayName:"MucCallout",description:"",tags:{},props:[{name:"type",description:"Type of the callout, default is `info`.\n\nAvailable are `info`, `warning`, `success` and `error`.",required:!1,type:{name:"calloutType"},defaultValue:{func:!1,value:'"info"'}}],slots:[{name:"icon",description:"Icon shown above the callout. Defaults to icons matching the type."},{name:"header",description:"Heading of the callout."},{name:"content",scoped:!0,bindings:[{name:"class",title:"binding"}],description:"Content beneath the heading shown as text."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Callout/MucCallout.vue"]};const j={component:F,title:"MucCallout",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-callout\` component is used to convey important information to the user through the use of contextual types, icons, and colors.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-callout)
`}}}},s={args:{header:"Information",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",type:"info"}},a={args:{...s.args,header:"Success",type:"success"}},t={args:{...s.args,header:"Warning",type:"warning"}},r={args:{...s.args,header:"Error",type:"error"}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    header: "Information",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    type: "info"
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,_,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Success",
    type: "success"
  }
}`,...(f=(_=a.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var g,y,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Warning",
    type: "warning"
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,w,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Error",
    type: "error"
  }
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const G=["Default","Success","Warning","Error"];export{s as Default,r as Error,a as Success,t as Warning,G as __namedExportsOrder,j as default};
