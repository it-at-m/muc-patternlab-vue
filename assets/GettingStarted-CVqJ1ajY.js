import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./chunk-RD3KTAHR-DzrSxq9U.js";import{r as n}from"./react-BqUAkA95.js";import{t as r}from"./mdx-react-shim-CPGU4JKB.js";import{c as i,s as a}from"./blocks-DjLLY-sm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Getting Started`}),`
`,(0,c.jsx)(t.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,c.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-shell`,children:`npm i @muenchen/muc-patternlab-vue
`})}),`
`,(0,c.jsx)(t.h2,{id:`setup`,children:`Setup`}),`
`,(0,c.jsx)(t.p,{children:`This setup assumes your client app is created with Vite and vue-ts template.`}),`
`,(0,c.jsxs)(t.p,{children:[`In your `,(0,c.jsx)(t.code,{children:`package.json`}),`, you shall have the dependencies compatible with the following:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`"dependencies": {
  "vue": "^3.5.0"
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`In your `,(0,c.jsx)(t.code,{children:`vite.config.ts`}),`, you shall configure to dedupe `,(0,c.jsx)(t.code,{children:`vue`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`export default defineConfig({
  resolve: {
    dedupe: ["vue"],
  },
});
`})}),`
`,(0,c.jsx)(t.p,{children:`In your Webcomponents root you should import the MDE5-CSS from assets.muenchen.de and SVG-Sprite for MDE5-Icons, as well as the optional custom-icons SVG-Sprite:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script
  lang="ts"
  setup
>
  import customIconsSprite from "@muenchen/muc-patternlab-vue/assets/icons/custom-icons.svg?raw";
  import mucIconsSprite from "@muenchen/muc-patternlab-vue/assets/icons/muc-icons.svg?raw";
<\/script>

<template>
  <link
    href="https://assets.muenchen.de/mde/1.1.19/css/style.css"
    rel="stylesheet"
  />

  <div>
    <div v-html="mucIconsSprite"></div>
    <div v-html="customIconsSprite"></div>
    <...>
  </div>
</template>

<style>
  @import "@muenchen/muc-patternlab-vue/assets/css/custom-style.css";
  @import "@muenchen/muc-patternlab-vue/muc-patternlab-vue.css";
</style>
`})}),`
`,(0,c.jsx)(t.p,{children:`Import components from this library in your own component:`}),`
`,(0,c.jsx)(t.p,{children:`e.G. Using the MucBanner-Component:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script setup>
  import { MucBanner } from "@muenchen/muc-patternlab-vue";
<\/script>

<template>
  <muc-banner title="Hello Muc">
    <div>How are you?</div>
  </muc-banner>
</template>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),r(),i()}))();export{s as default};