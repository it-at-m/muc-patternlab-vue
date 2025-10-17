import{d as p,c as d,k as u,B as c,w as t,u as l,o as h,i as a,t as n}from"./iframe-W9iDMWju.js";import"./MucBanner-BAS8cx2a.js";import"./MucButton-CEcD0JHl.js";import"./MucCalendar-DMXObG54.js";import"./MucCallout-1MFgP-Mx.js";import"./MucCard-CYmFTkPP.js";import"./MucCardContainer-Dxqz3eag.js";import{_ as g}from"./MucComment--yu54T0m.js";import"./MucDivider-BvDK9RHs.js";import"./MucFileDropzone-B9VBMpbe.js";import"./MucCheckbox-CoR2yXrc.js";import"./MucCheckboxGroup-BMtpOKEA.js";import"./MucCounter-BTQCWoMO.js";import"./MucErrorList-BOCnWXS6.js";import"./MucInput-Dr-A_gaa.js";import"./MucRadioButtonGroup-C8P1iulU.js";import"./MucSelect-D2N5uobv.js";import"./MucTextArea-BDzDjGb9.js";import"./MucIcon-DKJ0VcDH.js";import"./MucIntro-mDRzUlkJ.js";import"./MucLink-Cu6qQMls.js";import"./MucModal-xWthor2m.js";import"./MucPercentageSpinner-Dr0wno9k.js";import"./MucSliderItem-s5N_F-w-.js";import"./MucStepper-D3h-tQWq.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-CfTnnkVu.js";const f=" ",s=p({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(o){const m=d(()=>((o.initials??o.author.split(f).map(e=>e.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(e,y)=>(h(),u(l(g),{rating:e.rating,variant:e.variant},c({datePrefix:t(()=>[a(n(e.datePrefix),1)]),author:t(()=>[a(n(e.author),1)]),headline:t(()=>[a(n(e.headline),1)]),text:t(()=>[a(n(e.text),1)]),_:2},[m.value?{name:"initials",fn:t(()=>[a(n(m.value),1)]),key:"0"}:void 0,e.date?{name:"date",fn:t(()=>[a(n(e.date),1)]),key:"1"}:void 0]),1032,["rating","variant"]))}});s.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",description:"Text input to display in front of the date text input",required:!1,type:{name:"string"}},{name:"initials",description:`Optional text input to display the initials of the author next to name

(if kept empty will be calculated automatically)`,required:!1,type:{name:"string"}},{name:"author",description:"Text input to display the author name of the comment",required:!0,type:{name:"string"}},{name:"date",description:"Text input to display the date of the comment",required:!1,type:{name:"string"}},{name:"headline",description:"Text input to display the headline of the comment",required:!1,type:{name:"string"}},{name:"text",description:"Text input to display the content of the comment",required:!0,type:{name:"string"}},{name:"rating",description:"Rating of the comment in stars, between 0.0 and 5.0",required:!0,type:{name:"number"}},{name:"variant",description:"Choose the variant of the comment. Default is `listing`.\n\nThis can be either `slider` oder `listing`.",required:!1,type:{name:"CommentType"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucCommentText.vue"]};const G={component:s,title:"Comment/MucCommentText",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-comment component can be used to display a comment in e.g. a chat.
If you would like to display only text, we suggest using this component instead of the more generic \`muc-comment\`.
Furthermore this component does limit the number of charactesr for the initials to two.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`}}}},i={args:{rating:4.2,author:"Max Foo Bar Mustermann",headline:"Lorem ipsum is great",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"}},r={args:{...i.args,rating:2.3,author:"",headline:"I dont have an author",variant:"slider"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 4.2,
    author: "Max Foo Bar Mustermann",
    headline: "Lorem ipsum is great",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rating: 2.3,
    author: "",
    headline: "I dont have an author",
    variant: "slider"
  }
}`,...r.parameters?.docs?.source}}};const J=["Default","Slider"];export{i as Default,r as Slider,J as __namedExportsOrder,G as default};
