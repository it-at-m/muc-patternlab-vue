import{d as f,b as g,s as y,H as x,v as t,n as v,p as T,k as a,t as n}from"./vue.esm-bundler-rN7zufTY.js";import"./MucBanner-CPbnZiS7.js";import"./MucButton-HLjavNH4.js";import"./MucCalendar-wghnvrSW.js";import"./MucCallout-EtwVx3l8.js";import"./MucCard-Ded1aNlZ.js";import"./MucCardContainer-cmdpqoHb.js";import{_ as b}from"./MucComment-iRy9LdYU.js";import"./MucDivider-BKrwJduM.js";import"./MucFileDropzone-CzU8jJlw.js";import"./MucCheckbox-CGOilc2U.js";import"./MucCheckboxGroup-Hkv8lX3F.js";import"./MucCounter-B1pMTnPc.js";import"./MucErrorList-C7Do0NBB.js";import"./MucInput-DqKPziA5.js";import"./MucRadioButtonGroup-BIQsxM5w.js";import"./MucSelect-BnruffD3.js";import"./MucTextArea-CHWVvwDS.js";import"./MucIcon-vGihVT0q.js";import"./MucIntro-DJo6hqYY.js";import"./MucLink-DiHAPRQb.js";import"./MucPercentageSpinner-C6P9EIWU.js";import"./MucSliderItem-St-ckvhg.js";import"./MucStepper--_82xB0T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-DJZKPSHQ.js";const C=" ",h=f({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(o){const m=g(()=>((o.initials??o.author.split(C).map(e=>e.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(e,M)=>(T(),y(v(b),{rating:e.rating,variant:e.variant},x({datePrefix:t(()=>[a(n(e.datePrefix),1)]),author:t(()=>[a(n(e.author),1)]),headline:t(()=>[a(n(e.headline),1)]),text:t(()=>[a(n(e.text),1)]),_:2},[m.value?{name:"initials",fn:t(()=>[a(n(m.value),1)]),key:"0"}:void 0,e.date?{name:"date",fn:t(()=>[a(n(e.date),1)]),key:"1"}:void 0]),1032,["rating","variant"]))}});h.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",description:"Text input to display in front of the date text input",required:!1,type:{name:"string"}},{name:"initials",description:`Optional text input to display the initials of the author next to name

(if kept empty will be calculated automatically)`,required:!1,type:{name:"string"}},{name:"author",description:"Text input to display the author name of the comment",required:!0,type:{name:"string"}},{name:"date",description:"Text input to display the date of the comment",required:!1,type:{name:"string"}},{name:"headline",description:"Text input to display the headline of the comment",required:!1,type:{name:"string"}},{name:"text",description:"Text input to display the content of the comment",required:!0,type:{name:"string"}},{name:"rating",description:"Rating of the comment in stars, between 0.0 and 5.0",required:!0,type:{name:"number"}},{name:"variant",description:"Choose the variant of the comment. Default is `listing`.\n\nThis can be either `slider` oder `listing`.",required:!1,type:{name:"CommentType"}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucCommentText.vue"]};const W={component:h,title:"Comment/MucCommentText",tags:["autodocs"],parameters:{docs:{description:{component:`The muc-comment component can be used to display a comment in e.g. a chat.
If you would like to display only text, we suggest using this component instead of the more generic \`muc-comment\`.
Furthermore this component does limit the number of charactesr for the initials to two.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)
`}}}},i={args:{rating:4.2,author:"Max Foo Bar Mustermann",headline:"Lorem ipsum is great",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"}},r={args:{...i.args,rating:2.3,author:"",headline:"I dont have an author",variant:"slider"}};var s,p,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    rating: 4.2,
    author: "Max Foo Bar Mustermann",
    headline: "Lorem ipsum is great",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum eirmod tempor invidunt ut"
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rating: 2.3,
    author: "",
    headline: "I dont have an author",
    variant: "slider"
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const X=["Default","Slider"];export{i as Default,r as Slider,X as __namedExportsOrder,W as default};
