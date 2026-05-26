import{i as e}from"./preload-helper-Cs4UwXAW.js";import{F as t,L as n,c as r,s as i}from"./blocks-DUQt6Wum.js";import{t as a}from"./mdx-react-shim-BfyKhd46.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Getting Started`}),`
`,(0,c.jsx)(n.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,c.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-shell`,children:`npm i @muenchen/muc-patternlab-vue
`})}),`
`,(0,c.jsx)(n.h2,{id:`setup`,children:`Setup`}),`
`,(0,c.jsx)(n.p,{children:`This setup assumes your client app is created with Vite and vue-ts template.`}),`
`,(0,c.jsxs)(n.p,{children:[`In your `,(0,c.jsx)(n.code,{children:`package.json`}),`, you shall have the dependencies compatible with the following:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`"dependencies": {
  "vue": "^3.5.0"
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`In your `,(0,c.jsx)(n.code,{children:`vite.config.ts`}),`, you shall configure to dedupe `,(0,c.jsx)(n.code,{children:`vue`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`export default defineConfig({
  resolve: {
    dedupe: ["vue"],
  },
});
`})}),`
`,(0,c.jsx)(n.p,{children:`In your Webcomponents root you should import the MDE5-CSS from assets.muenchen.de and SVG-Sprite for MDE5-Icons, as well as the optional custom-icons SVG-Sprite:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<script
  lang="ts"
  setup
>
  import customIconsSprite from "@muenchen/muc-patternlab-vue/assets/icons/custom-icons.svg?raw";
  import mucIconsSprite from "@muenchen/muc-patternlab-vue/assets/icons/muc-icons.svg?raw";
<\/script>

<template>
  <div>
    <div v-html="mucIconsSprite"></div>
    <div v-html="customIconsSprite"></div>
    <...>
  </div>
</template>

<style>
  @import url("https://assets.muenchen.de/mde/1.1.23/css/style.css");
  @import "@muenchen/muc-patternlab-vue/assets/css/custom-style.css";
  @import "@muenchen/muc-patternlab-vue/style.css";
</style>
`})}),`
`,(0,c.jsx)(n.h3,{id:`font-setup-required-for-local-development`,children:`Font setup (required for local development)`}),`
`,(0,c.jsxs)(n.p,{children:[`When using the library with web components, ensure the MDE fontfaces are loaded in your application's `,(0,c.jsx)(n.code,{children:`index.html`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<link
  href="https://assets.muenchen.de/mde/1.1.23/css/fonts.css"
  rel="stylesheet"
/>
`})}),`
`,(0,c.jsx)(n.p,{children:`Import components from this library in your own component:`}),`
`,(0,c.jsx)(n.p,{children:`e.G. Using the MucBanner-Component:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<script setup>
  import { MucBanner } from "@muenchen/muc-patternlab-vue";
<\/script>

<template>
  <muc-banner title="Hello Muc">
    <div>How are you?</div>
  </muc-banner>
</template>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};