import{d as m,b as u,e as t,f as e,t as o,F as p,l as _,p as s}from"./vue.esm-bundler-Dxwp2idO.js";const d={class:"m-error-list",role:"alert",tabindex:"-1"},f={class:"m-error-list__title"},g={class:"m-error-list__body"},y={class:"m-list m-error-list__list"},h=m({__name:"MucErrorList",props:{title:{},errors:{}},setup(n){const r=n,a=u(()=>typeof r.errors=="string"?[r.errors]:r.errors);return(i,v)=>(s(),t("div",d,[e("h2",f,o(i.title),1),e("div",g,[e("ul",y,[(s(!0),t(p,null,_(a.value,(l,c)=>(s(),t("li",{key:c},[e("a",null,o(l),1)]))),128))])])]))}});h.__docgenInfo={exportName:"default",displayName:"MucErrorList",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"errors",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Form/MucErrorList.vue"]};export{h as _};
