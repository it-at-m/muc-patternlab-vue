import{d,j as p,i as u,D as c,p as e,u as l,o as h,h as a,t as n}from"./iframe-Cs0X-qEN.js";import"./MucAccordion-Do7ZQxI6.js";import"./MucAccordionItem-igb85HlE.js";import"./MucBanner-CfSZG5Z2.js";import"./MucButton-zYKSvNOP.js";import"./MucCalendar-WoTqjTYK.js";import"./MucCallout-B4OR-w3-.js";import"./MucCard-cJEitCuA.js";import"./MucCardContainer-B3W4HQRh.js";import{_ as g}from"./MucComment-Buveg71s.js";import"./MucDivider-BYyjzkek.js";import"./MucFileDropzone-BF5Zr_mI.js";import"./MucCheckbox-x_EY-Z33.js";import"./MucCheckboxGroup-Cuxu6OWx.js";import"./MucCounter-Do0rLbUu.js";import"./MucErrorList-Bu7opZdH.js";import"./MucInput-DTCxuVyp.js";import"./MucRadioButtonGroup-DYqAqGQP.js";import"./MucSelect-C9dPKozy.js";import"./MucTextArea-Co8npnox.js";import"./MucIcon-Dudwo8NT.js";import"./MucIntro-DpcxNtEm.js";import"./MucLink-CT1fmXLU.js";import"./MucModal-3Vi6ceNv.js";import"./MucSpinner-6z5LhgTh.js";import"./MucSliderItem-BynkIjga.js";import"./MucStepper-DOboTZor.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-DijIEyBg.js";const f=" ",s=d({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(t){const o=p(()=>((t.initials??t.author.split(f).map(m=>m.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(m,x)=>(h(),u(l(g),{rating:t.rating,variant:t.variant},c({datePrefix:e(()=>[a(n(t.datePrefix),1)]),author:e(()=>[a(n(t.author),1)]),headline:e(()=>[a(n(t.headline),1)]),text:e(()=>[a(n(t.text),1)]),_:2},[o.value?{name:"initials",fn:e(()=>[a(n(o.value),1)]),key:"0"}:void 0,t.date?{name:"date",fn:e(()=>[a(n(t.date),1)]),key:"1"}:void 0]),1032,["rating","variant"]))}});s.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",description:"Text input to display in front of the date text input",required:!1,type:{name:"string"}},{name:"initials",description:`Optional text input to display the initials of the author next to name

(if kept empty will be calculated automatically)`,required:!1,type:{name:"string"}},{name:"author",description:"Text input to display the author name of the comment",required:!0,type:{name:"string"}},{name:"date",description:"Text input to display the date of the comment",required:!1,type:{name:"string"}},{name:"headline",description:"Text input to display the headline of the comment",required:!1,type:{name:"string"}},{name:"text",description:"Text input to display the content of the comment",required:!0,type:{name:"string"}},{name:"rating",description:"Rating of the comment in stars, between 0.0 and 5.0",required:!0,type:{name:"number"}},{name:"variant",description:"Choose the variant of the comment. Default is `listing`.\n\nThis can be either `slider` oder `listing`.",required:!1,type:{name:"CommentType"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucCommentText.vue"]};const Q={component:s,title:"Comment/MucCommentText",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-comment component can be used to display a comment in e.g. a chat.
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
}`,...r.parameters?.docs?.source}}};const W=["Default","Slider"];export{i as Default,r as Slider,W as __namedExportsOrder,Q as default};
