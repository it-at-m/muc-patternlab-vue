import{d as x,b as d,e as m,f as e,g as p,n as M,o as _}from"./vue.esm-bundler-CDraiNYW.js";const W=["aria-label"],$={class:"m-callout__inner"},B={class:"m-callout__icon"},L={"aria-hidden":"true",class:"icon"},N=["xlink:href"],T={class:"m-callout__body"},A={class:"m-callout__body__inner"},O={class:"m-callout__headline"},V={class:"m-callout__content"},I=x({__name:"MucCallout",props:{type:{default:"info"}},setup(a){const s=a,r=d(()=>{switch(s.type){case"error":return"warning";case"success":return"check";default:return"information"}}),l=d(()=>{switch(s.type){case"error":return"m-callout--error";case"warning":return"m-callout--warning";case"success":return"m-callout--success";default:return"m-callout--default"}}),u=d(()=>{switch(s.type){case"success":return"Erfolgreich";case"warning":return"Warnung";case"error":return"Error";default:return"Information"}});return(i,F)=>(_(),m("div",{class:M(["m-callout",l.value]),"aria-label":u.value},[e("div",$,[e("div",B,[p(i.$slots,"icon",{},()=>[(_(),m("svg",L,[e("use",{"xlink:href":`#icon-${r.value}`},null,8,N)]))],!0)]),e("div",T,[e("div",A,[e("div",O,[p(i.$slots,"header",{},void 0,!0)]),e("div",V,[e("p",null,[p(i.$slots,"content",{class:"m-callout__content"},void 0,!0)])])])])])],10,W))}}),q=(a,s)=>{const r=a.__vccOpts||a;for(const[l,u]of s)r[l]=u;return r},z=q(I,[["__scopeId","data-v-efad4956"]]);I.__docgenInfo={exportName:"default",displayName:"MucCallout",description:"",tags:{},props:[{name:"type",description:"Type of the callout, default is `info`.\n\nAvailable are `info`, `warning`, `success` and `error`.",required:!1,type:{name:"calloutType"},defaultValue:{func:!1,value:'"info"'}}],slots:[{name:"icon",description:"Icon shown above the callout. Defaults to icons matching the type."},{name:"header",description:"Heading of the callout."},{name:"content",scoped:!0,bindings:[{name:"class",title:"binding"}],description:"Content beneath the heading shown as text."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Callout/MucCallout.vue"]};const P={component:z,title:"MucCallout",tags:["autodocs"],parameters:{docs:{description:{component:`The \`muc-callout\` component is used to convey important information to the user through the use of contextual types, icons, and colors.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-callout)
`}}}},t={args:{header:"Information",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",type:"info"}},o={args:{...t.args,header:"Success",type:"success"}},n={args:{...t.args,header:"Warning",type:"warning"}},c={args:{...t.args,header:"Error",type:"error"}};var h,g,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    header: "Information",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    type: "info"
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Success",
    type: "success"
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,C,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Warning",
    type: "warning"
  }
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var k,E,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: "Error",
    type: "error"
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const j=["Default","Success","Warning","Error"];export{t as Default,c as Error,o as Success,n as Warning,j as __namedExportsOrder,P as default};
