import{d as u,b as n,e as i,f as a,n as l,g as m,j as f,u as d,o as p}from"./vue.esm-bundler-CDd4cxOR.js";import{_ as g}from"./MucIcon-B70FWVBC.js";const y=["role","aria-label"],b={class:"container-fluid"},h=u({__name:"MucBanner",props:{type:{default:"info"}},setup(e){const r=n(()=>{switch(e.type){case"info":return"m-banner--info";case"success":return"m-banner--success";case"warning":return"m-banner--warning";case"emergency":return"m-banner--emergency";default:return"m-banner--info"}}),t=n(()=>{switch(e.type){case"info":return"dialog";case"success":return"dialog";case"warning":return"alert";case"emergency":return"alert";default:return"dialog"}}),s=n(()=>{switch(e.type){case"info":return"Information";case"success":return"Erfolg";case"warning":return"Warnung";case"emergency":return"Emergency";default:return"Information"}}),c=n(()=>{switch(e.type){case"success":return"check";case"warning":case"emergency":return"warning";case"info":default:return"information"}});return(o,v)=>(p(),i("div",null,[a("div",null,[a("div",{class:l(["m-banner",r.value]),role:t.value,"aria-label":s.value},[a("div",b,[m(d(g),{icon:c.value},null,8,["icon"]),f(o.$slots,"default")])],10,y)])]))}});h.__docgenInfo={exportName:"default",displayName:"MucBanner",description:"",tags:{},props:[{name:"type",description:"Changes the style of the banner. Available types are `info`, `warning` and `emergency`.",required:!1,type:{name:"bannerType"}}],slots:[{name:"default",description:"Text-content of the banner."}],sourceFiles:["/home/runner/work/muc-patternlab-vue/muc-patternlab-vue/src/components/Banner/MucBanner.vue"]};export{h as _};
