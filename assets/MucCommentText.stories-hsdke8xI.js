import{d as f,b as v,s as y,v as x,w as t,q as C,o as M,k as a,t as n}from"./vue.esm-bundler-1xdlfLiW.js";import"./MucBanner-CY1xjiRU.js";import"./MucButton-CdqlnLdK.js";import"./MucCallout-9lnZ09Hz.js";import"./MucCard-BCQzsZNm.js";import"./MucCardContainer-D2yEFWXF.js";import{_ as T}from"./MucComment-DuPMxvwA.js";import"./MucIcon-ClXSNDg9.js";import"./MucIntro-Dw71-QwI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _=" ",c=f({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(g){const i=g,h=v(()=>((i.initials??i.author.split(_).map(e=>e.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(e,q)=>(M(),y(C(T),{rating:e.rating,variant:e.variant},x({initials:t(()=>[a(n(h.value),1)]),datePrefix:t(()=>[a("am")]),author:t(()=>[a(n(e.author),1)]),headline:t(()=>[a(n(e.headline),1)]),text:t(()=>[a(n(e.text),1)]),_:2},[e.date?{name:"date",fn:t(()=>[a(n(e.date),1)]),key:"0"}:void 0]),1032,["rating","variant"]))}});c.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"am"'}},{name:"initials",required:!1,type:{name:"string"}},{name:"author",required:!0,type:{name:"string"}},{name:"date",required:!1,type:{name:"string"}},{name:"headline",required:!1,type:{name:"string"}},{name:"text",required:!0,type:{name:"string"}},{name:"rating",required:!0,type:{name:"number"}},{name:"variant",required:!1,type:{name:"CommentType"},defaultValue:{func:!1,value:'"listing"'}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucCommentText.vue"]};const F={component:c,title:"Comment/MucCommentText",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-comment component can be used to display a comment in e.g. a chat.
If you would like to display only text, we suggest using this component instead of the more generic \`muc-comment\`.
Furthermore this component does limit the number of charactesr for the initials to two.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`}}}},r={args:{rating:4.2,author:"Max Foo Bar Mustermann",headline:"Initials shortend",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"}},o={args:{...r.args,rating:2.3,author:"",headline:"Empty Author",variant:"slider"}};var s,m,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    rating: 4.2,
    author: "Max Foo Bar Mustermann",
    headline: "Initials shortend",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rating: 2.3,
    author: "",
    headline: "Empty Author",
    variant: "slider"
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const N=["Default","Slider"];export{r as Default,o as Slider,N as __namedExportsOrder,F as default};
