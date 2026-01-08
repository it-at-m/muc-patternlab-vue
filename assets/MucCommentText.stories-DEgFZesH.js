import{d,m as u,l as p,H as c,v as e,u as l,o as h,k as a,t as n}from"./iframe-B5-v3VRy.js";import"./MucAccordion-fhtG1HK5.js";import"./MucAccordionItem-SszO5DxP.js";import"./MucBanner-DZmrHvUA.js";import"./MucButton-DPiNDO03.js";import"./MucCalendar-DuBn2ZW6.js";import"./MucCallout-Bmqb4tO3.js";import"./MucCard-CWnDtJTL.js";import"./MucCardContainer-BclFX0XZ.js";import{_ as g}from"./MucComment-D-dMZSWK.js";import"./MucDivider-HXDzvB5Q.js";import"./MucFileDropzone-Bt8qBi0-.js";import"./MucCheckbox-DYRp5b4j.js";import"./MucCheckboxGroup-o7FGKG12.js";import"./MucCounter-VAxT4Ub9.js";import"./MucErrorList-CiQKg-mT.js";import"./MucInput-CZEd7VPk.js";import"./MucRadioButtonGroup-tHQDBcc8.js";import"./MucSelect-5BZ22lFB.js";import"./MucTextArea-tww29p4x.js";import"./MucIcon-CKmg0165.js";import"./MucIntro-DSIEyhV5.js";import"./MucLink-txb6toO2.js";import"./MucModal-XEhwrOBd.js";import"./MucSpinner-DHu6gpkX.js";import"./MucSliderItem-C-n75nyT.js";import"./MucStepper-DrwBLSqU.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-DCPOszLc.js";const f=" ",s=d({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(t){const o=u(()=>((t.initials??t.author.split(f).map(m=>m.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(m,x)=>(h(),p(l(g),{rating:t.rating,variant:t.variant},c({datePrefix:e(()=>[a(n(t.datePrefix),1)]),author:e(()=>[a(n(t.author),1)]),headline:e(()=>[a(n(t.headline),1)]),text:e(()=>[a(n(t.text),1)]),_:2},[o.value?{name:"initials",fn:e(()=>[a(n(o.value),1)]),key:"0"}:void 0,t.date?{name:"date",fn:e(()=>[a(n(t.date),1)]),key:"1"}:void 0]),1032,["rating","variant"]))}});s.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",description:"Text input to display in front of the date text input",required:!1,type:{name:"string"}},{name:"initials",description:`Optional text input to display the initials of the author next to name

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
