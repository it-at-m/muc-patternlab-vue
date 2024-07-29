import{d as f,b as y,s as v,E as x,w as t,n as C,p as M,j as a,t as r}from"./vue.esm-bundler-DIzIJAKo.js";import"./MucBanner-CQTvh0cd.js";import"./MucButton-Cbp7DkA3.js";import"./MucCallout-1zLMvDJz.js";import"./MucCard-BQA3UFBq.js";import"./MucCardContainer-CiMZNQHf.js";import{_ as T}from"./MucComment-BHGynXUs.js";import"./MucCheckbox-41oU92ia.js";import"./MucCheckboxGroup-Ba8pAYmE.js";import"./MucErrorList-DG9OpPCP.js";import"./MucInput-D3zDx1lT.js";import"./MucRadioButtonGroup-B3vLTdhP.js";import"./MucSelect-CcOSf93D.js";import"./MucTextArea-DXsYhm0c.js";import"./MucIcon-BMESSn9B.js";import"./MucIntro-C9LYcdmq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _=" ",c=f({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(g){const i=g,h=y(()=>((i.initials??i.author.split(_).map(e=>e.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(e,b)=>(M(),v(C(T),{rating:e.rating,variant:e.variant},x({initials:t(()=>[a(r(h.value),1)]),datePrefix:t(()=>[a("am")]),author:t(()=>[a(r(e.author),1)]),headline:t(()=>[a(r(e.headline),1)]),text:t(()=>[a(r(e.text),1)]),_:2},[e.date?{name:"date",fn:t(()=>[a(r(e.date),1)]),key:"0"}:void 0]),1032,["rating","variant"]))}});c.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"am"'}},{name:"initials",required:!1,type:{name:"string"}},{name:"author",required:!0,type:{name:"string"}},{name:"date",required:!1,type:{name:"string"}},{name:"headline",required:!1,type:{name:"string"}},{name:"text",required:!0,type:{name:"string"}},{name:"rating",required:!0,type:{name:"number"}},{name:"variant",required:!1,type:{name:"CommentType"},defaultValue:{func:!1,value:'"listing"'}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucCommentText.vue"]};const $={component:c,title:"Comment/MucCommentText",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-comment component can be used to display a comment in e.g. a chat.
If you would like to display only text, we suggest using this component instead of the more generic \`muc-comment\`.
Furthermore this component does limit the number of charactesr for the initials to two.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`}}}},n={args:{rating:4.2,author:"Max Foo Bar Mustermann",headline:"Initials shortend",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"}},o={args:{...n.args,rating:2.3,author:"",headline:"Empty Author",variant:"slider"}};var s,m,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    rating: 4.2,
    author: "Max Foo Bar Mustermann",
    headline: "Initials shortend",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rating: 2.3,
    author: "",
    headline: "Empty Author",
    variant: "slider"
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const H=["Default","Slider"];export{n as Default,o as Slider,H as __namedExportsOrder,$ as default};
