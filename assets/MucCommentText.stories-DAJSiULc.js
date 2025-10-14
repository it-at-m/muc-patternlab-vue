import{d as p,c as d,k as u,B as c,w as t,u as l,o as h,i as a,t as n}from"./iframe-D-zVlmdu.js";import"./MucBanner-CdqjkzMY.js";import"./MucButton-BaYkZMke.js";import"./MucCalendar-CDbssyJa.js";import"./MucCallout-CGHKe754.js";import"./MucCard-CA8Wlp93.js";import"./MucCardContainer-C4hz3MKq.js";import{_ as g}from"./MucComment-vWmViayL.js";import"./MucDivider-CbWHXNs_.js";import"./MucFileDropzone-C9C_NHCZ.js";import"./MucCheckbox-lTwEnrJd.js";import"./MucCheckboxGroup-Q7XWndXK.js";import"./MucCounter-CYbRCl7W.js";import"./MucErrorList-6-lTVy1I.js";import"./MucInput-DgtMHJyi.js";import"./MucRadioButtonGroup-C56CU3m0.js";import"./MucSelect-DahvY63L.js";import"./MucTextArea-BTb4ftfL.js";import"./MucIcon-DwcZwjQ0.js";import"./MucIntro-BDQVwyE9.js";import"./MucLink-CfICp-pb.js";import"./MucModal-B9twVIT-.js";import"./MucPercentageSpinner-BVeAOhha.js";import"./MucSliderItem-Ad_Az4FL.js";import"./MucStepper-By58uYUd.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-DacksjU4.js";const f=" ",s=p({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(o){const m=d(()=>((o.initials??o.author.split(f).map(e=>e.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(e,y)=>(h(),u(l(g),{rating:e.rating,variant:e.variant},c({datePrefix:t(()=>[a(n(e.datePrefix),1)]),author:t(()=>[a(n(e.author),1)]),headline:t(()=>[a(n(e.headline),1)]),text:t(()=>[a(n(e.text),1)]),_:2},[m.value?{name:"initials",fn:t(()=>[a(n(m.value),1)]),key:"0"}:void 0,e.date?{name:"date",fn:t(()=>[a(n(e.date),1)]),key:"1"}:void 0]),1032,["rating","variant"]))}});s.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",description:"Text input to display in front of the date text input",required:!1,type:{name:"string"}},{name:"initials",description:`Optional text input to display the initials of the author next to name

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
