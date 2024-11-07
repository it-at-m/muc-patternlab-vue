import{d as $,u as D,b as i,e as s,f as e,g as r,j as d,k as g,F as S,l as y,m as u,n as _,t as E,o as L,p as a}from"./vue.esm-bundler-BeGYTx_4.js";import{_ as h}from"./MucIcon-Da7jEBmO.js";const N={class:"m-comment__head"},R={key:0,class:"m-comment__initials"},x={class:"m-comment__info"},H={class:"m-comment__author"},P={key:0},T={class:"m-comment__author"},F={class:"m-comment__date"},O=["aria-label"],w={key:0,class:"m-star-rating__item m-star-rating__item--half"},B={class:"m-star-rating__numeric"},V={class:"m-comment__body"},A={class:"m-comment__headline"},q={class:"m-comment__text"},I="de-DE",W=.2,j=.8,l=5,z=$({__name:"MucComment",props:{rating:{},variant:{default:"listing"}},setup(f){const p=D(),C=i(()=>!!p.date),b=i(()=>!!p.initials),k=i(()=>f.variant==="slider"?"m-comment--slider":"m-comment--listing"),m=i(()=>Math.min(Math.max(f.rating,0),l)),M=i(()=>m.value.toLocaleString(I.valueOf(),{minimumFractionDigits:1})),c=i(()=>{const t=+(m.value%1).toFixed(1);let n=Math.min(Math.floor(m.value),l),o=Math.floor(l-m.value),v=!1;return t!==0&&(t<=W?o++:t>=j?n++:v=!0),{fullStars:n,emptyStars:o,isHalfStar:v}});return(t,n)=>(a(),s("div",{class:L(["m-comment",k.value])},[e("div",N,[b.value?(a(),s("div",R,[r(t.$slots,"initials")])):d("",!0),e("div",x,[e("span",H,[r(t.$slots,"author")]),C.value?(a(),s("span",P,[e("span",T,[n[0]||(n[0]=g("  ")),r(t.$slots,"datePrefix")]),e("span",F,[n[1]||(n[1]=g(" ")),r(t.$slots,"date")])])):d("",!0),e("div",{class:"m-star-rating",role:"img","aria-label":`Bewertung: ${t.rating} von ${l} Sternen`},[(a(!0),s(S,null,y(c.value.fullStars,o=>(a(),s("div",{key:o,class:"m-star-rating__item m-star-rating__item--full"},[u(_(h),{icon:"solid-star"})]))),128)),c.value.isHalfStar?(a(),s("div",w,[u(_(h),{icon:"half-star"})])):d("",!0),(a(!0),s(S,null,y(c.value.emptyStars,o=>(a(),s("div",{key:o,class:"m-star-rating__item"},[u(_(h),{icon:"solid-star"})]))),128)),e("div",B,E(M.value),1)],8,O)])]),e("div",V,[e("div",A,[r(t.$slots,"headline")]),e("div",q,[r(t.$slots,"text")])])],2))}});z.__docgenInfo={exportName:"default",displayName:"MucComment",description:"",tags:{},props:[{name:"rating",description:"Number of stars to be displayed.",required:!0,type:{name:"number"}},{name:"variant",description:"Choose the variant of the comment. Default is `listing`.\n\nThis can be either `slider` oder `listing`.",required:!1,type:{name:"CommentType"}}],slots:[{name:"initials",description:"Slot for the commenter's initials or avatar."},{name:"author",description:"Slot for the author's name or username."},{name:"datePrefix",description:'Prefix for the date (e.g., "am").'},{name:"date",description:"Slot for the comment's date."},{name:"headline",description:"Slot for the comment's headline or title."},{name:"text",description:"Slot for the main text content of the comment."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Comment/MucComment.vue"]};export{z as _};
