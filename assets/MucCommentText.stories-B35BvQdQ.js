import{d as g,c as f,k as y,B as x,w as t,u as v,o as T,h as a,t as n}from"./iframe-CflK2RdB.js";import"./MucBanner-CayaWv_n.js";import"./MucButton-CnvMzaGz.js";import"./MucCalendar-G_cTA7iY.js";import"./MucCallout-yrXFgm8P.js";import"./MucCard-Do35kYrb.js";import"./MucCardContainer-CHaj61br.js";import{_ as C}from"./MucComment-TFEBlFqg.js";import"./MucDivider-BDxI681_.js";import"./MucFileDropzone-CxI2L-OE.js";import"./MucCheckbox-DL85E1mk.js";import"./MucCheckboxGroup-63dZ8r1d.js";import"./MucCounter-C3Ibvpei.js";import"./MucErrorList-DORD-mTg.js";import"./MucInput-DCJBM57d.js";import"./MucRadioButtonGroup-CnWuua_Y.js";import"./MucSelect-CeiEQywZ.js";import"./MucTextArea-DEULvQBl.js";import"./MucIcon-B1_LK6UM.js";import"./MucIntro-2Cv4Rr-F.js";import"./MucLink-ByI7VY1l.js";import"./MucPercentageSpinner-DkuU8dh5.js";import"./MucSliderItem-DkyrepyL.js";import"./MucStepper-C6iQV6Fn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormErrorMessage-hSzc4_XP.js";const b=" ",h=g({__name:"MucCommentText",props:{datePrefix:{default:"am"},initials:{},author:{},date:{},headline:{},text:{},rating:{},variant:{default:"listing"}},setup(o){const m=f(()=>((o.initials??o.author.split(b).map(e=>e.charAt(0)).join("")).match(/^.|.$/g)??[""]).join(""));return(e,M)=>(T(),y(v(C),{rating:e.rating,variant:e.variant},x({datePrefix:t(()=>[a(n(e.datePrefix),1)]),author:t(()=>[a(n(e.author),1)]),headline:t(()=>[a(n(e.headline),1)]),text:t(()=>[a(n(e.text),1)]),_:2},[m.value?{name:"initials",fn:t(()=>[a(n(m.value),1)]),key:"0"}:void 0,e.date?{name:"date",fn:t(()=>[a(n(e.date),1)]),key:"1"}:void 0]),1032,["rating","variant"]))}});h.__docgenInfo={exportName:"default",displayName:"MucCommentText",description:"",tags:{},props:[{name:"datePrefix",description:"Text input to display in front of the date text input",required:!1,type:{name:"string"}},{name:"initials",description:`Optional text input to display the initials of the author next to name

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
