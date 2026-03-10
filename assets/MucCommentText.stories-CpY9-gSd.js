import{d,q as p,H as u,v as e,l as c,m as l,p as h,h as a,t as n}from"./iframe-Cuw0evxA.js";import"./MucAccordion-C13Zfrtp.js";import"./MucAccordionItem-Bxi0xs1r.js";import"./MucBanner-BeYLo9KG.js";import"./MucButton-BOlmf0hk.js";import"./MucCalendar-sP7AyGgN.js";import"./MucCallout-B7Yw1WsL.js";import"./MucCard-B4ZTNuHc.js";import"./MucCardContainer-BFY2Oi7y.js";import{_ as g}from"./MucComment-BL8qj8mG.js";import"./MucDivider-D9SDcxyt.js";import"./MucFileDropzone-Dgj67XFI.js";import"./MucCheckbox-CFITgR0j.js";import"./MucCheckboxGroup-DfyF32Ny.js";import"./MucCounter-CHeT4wRD.js";import"./MucErrorList-CIh36oKy.js";import"./MucInput-AriDun67.js";import"./MucRadioButtonGroup-BYeqIMHI.js";import"./MucSelect-DRphmTV7.js";import"./MucTextArea-BvqbX2As.js";import"./MucIcon-DKlnivov.js";import"./MucIntro-nE5_7yC8.js";import"./MucLink-BktQSbr5.js";import"./MucModal-DHQB3_xR.js";import"./MucSpinner-B8uTllWl.js";import"./MucSliderItem-DiAGtfgh.js";import"./MucStepper-ozFzvwfu.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-D5yqf3x2.js";const f=" ",o=d({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(t){const m=l(()=>((t.initials??t.author.split(f).map(s=>s.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(s,x)=>(h(),p(c(g),{rating:t.rating,variant:t.variant},u({datePrefix:e(()=>[a(n(t.datePrefix),1)]),author:e(()=>[a(n(t.author),1)]),headline:e(()=>[a(n(t.headline),1)]),text:e(()=>[a(n(t.text),1)]),_:2},[m.value?{name:"initials",fn:e(()=>[a(n(m.value),1)]),key:"0"}:void 0,t.date?{name:"date",fn:e(()=>[a(n(t.date),1)]),key:"1"}:void 0]),1032,["rating","variant"]))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",description:"Text input to display in front of the date text input",required:!1,type:{name:"string"}},{name:"initials",description:`Optional text input to display the initials of the author next to name

(if kept empty will be calculated automatically)`,required:!1,type:{name:"string"}},{name:"author",description:"Text input to display the author name of the comment",required:!0,type:{name:"string"}},{name:"date",description:"Text input to display the date of the comment",required:!1,type:{name:"string"}},{name:"headline",description:"Text input to display the headline of the comment",required:!1,type:{name:"string"}},{name:"text",description:"Text input to display the content of the comment",required:!0,type:{name:"string"}},{name:"rating",description:"Rating of the comment in stars, between 0.0 and 5.0",required:!0,type:{name:"number"}},{name:"variant",description:"Choose the variant of the comment. Default is `listing`.\n\nThis can be either `slider` oder `listing`.",required:!1,type:{name:"CommentType"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucCommentText.vue"]});const K={component:o,title:"Comment/MucCommentText",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-comment component can be used to display a comment in e.g. a chat.
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
}`,...r.parameters?.docs?.source}}};const Q=["Default","Slider"];export{i as Default,r as Slider,Q as __namedExportsOrder,K as default};
