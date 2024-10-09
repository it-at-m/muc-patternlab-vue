import{d as v,b as y,s as x,H as C,v as t,n as M,p as T,j as a,t as r}from"./vue.esm-bundler-Dxwp2idO.js";import"./MucBanner-zyb4vgMz.js";import"./MucButton-DEB08KxA.js";import"./MucCallout-VLmUsGih.js";import"./MucCard-B96cs6Mj.js";import"./MucCardContainer-CloDEUEh.js";import{_ as b}from"./MucComment-DphLkDCc.js";import"./MucDivider-D9z18vGj.js";import"./MucFileDropzone-DnDTk4ek.js";import"./MucCheckbox-BU9QLiRr.js";import"./MucCheckboxGroup-W4wxpR1j.js";import"./MucCounter-BIh-Kchy.js";import"./MucErrorList-titm82GZ.js";import"./MucInput-0BJMGz0f.js";import"./MucRadioButtonGroup-C6aQxk2-.js";import"./MucSelect-BEy5u6Sf.js";import"./MucTextArea-Bnr-8u2n.js";import"./MucIcon-DnuNrOqz.js";import"./MucIntro-g7B2J94s.js";import"./MucLink-CYiJc7cm.js";import"./MucPercentageSpinner-DWbI90Yv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q=" ",g=v({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(h){const i=h,f=y(()=>((i.initials??i.author.split(q).map(e=>e.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(e,m)=>(T(),x(M(b),{rating:e.rating,variant:e.variant},C({initials:t(()=>[a(r(f.value),1)]),datePrefix:t(()=>[m[0]||(m[0]=a("am"))]),author:t(()=>[a(r(e.author),1)]),headline:t(()=>[a(r(e.headline),1)]),text:t(()=>[a(r(e.text),1)]),_:2},[e.date?{name:"date",fn:t(()=>[a(r(e.date),1)]),key:"0"}:void 0]),1032,["rating","variant"]))}});g.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"am"'}},{name:"initials",required:!1,type:{name:"string"}},{name:"author",required:!0,type:{name:"string"}},{name:"date",required:!1,type:{name:"string"}},{name:"headline",required:!1,type:{name:"string"}},{name:"text",required:!0,type:{name:"string"}},{name:"rating",required:!0,type:{name:"number"}},{name:"variant",required:!1,type:{name:"CommentType"},defaultValue:{func:!1,value:'"listing"'}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucCommentText.vue"]};const J={component:g,title:"Comment/MucCommentText",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-comment component can be used to display a comment in e.g. a chat.
If you would like to display only text, we suggest using this component instead of the more generic \`muc-comment\`.
Furthermore this component does limit the number of charactesr for the initials to two.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`}}}},n={args:{rating:4.2,author:"Max Foo Bar Mustermann",headline:"Initials shortend",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"}},o={args:{...n.args,rating:2.3,author:"",headline:"Empty Author",variant:"slider"}};var s,u,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    rating: 4.2,
    author: "Max Foo Bar Mustermann",
    headline: "Initials shortend",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rating: 2.3,
    author: "",
    headline: "Empty Author",
    variant: "slider"
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const K=["Default","Slider"];export{n as Default,o as Slider,K as __namedExportsOrder,J as default};
