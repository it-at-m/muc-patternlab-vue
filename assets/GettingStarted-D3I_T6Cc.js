import{ae as e,af as o}from"./index-IDqYU5PF.js";import{u as r}from"./index-CjSQqLZK.js";import"./iframe-D5214VXL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-mmRH1Wqy.js";import"./index-ogSvIofg.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm i @muenchen/muc-patternlab-vue
`})}),`
`,e.jsx(n.h2,{id:"setup",children:"Setup"}),`
`,e.jsx(n.p,{children:"This setup assumes your client app is created with Vite and vue-ts template."}),`
`,e.jsxs(n.p,{children:["In your ",e.jsx(n.code,{children:"package.json"}),", you shall have the dependencies compatible with the following:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`"dependencies": {
  "vue": "^3.5.0"
}
`})}),`
`,e.jsxs(n.p,{children:["In your ",e.jsx(n.code,{children:"vite.config.ts"}),", you shall configure to dedupe ",e.jsx(n.code,{children:"vue"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export default defineConfig({
  resolve: {
    dedupe: ["vue"],
  },
});
`})}),`
`,e.jsx(n.p,{children:"In your Webcomponents root you should import the MDE5-CSS and SVG-Sprite for MDE5-Icons, as well as the optional custom-icons SVG-Sprite:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script
  lang="ts"
  setup
>
  import customIconsSprite from "@muenchen/muc-patternlab-vue/assets/temporary/custom-icons.svg?raw";
  import mucIconsSprite from "@muenchen/muc-patternlab-vue/assets/temporary/muc-icons.svg?raw";
<\/script>

<template>
  <div>
    <div v-html="mucIconsSprite"></div>
    <div v-html="customIconsSprite"></div>
    <...>
  </div>
</template>

<style>
  @import "@muenchen/muc-patternlab-vue/assets/temporary/muenchende-style.css";
  @import "@muenchen/muc-patternlab-vue/assets/temporary/custom-style.css";
  @import "@muenchen/muc-patternlab-vue/style.css";
</style>
`})}),`
`,e.jsx(n.p,{children:"Import components from this library in your own component:"}),`
`,e.jsx(n.p,{children:"e.G. Using the MucBanner-Component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
  import { MucBanner } from "@muenchen/muc-patternlab-vue";
<\/script>

<template>
  <muc-banner title="Hello Muc">
    <div>How are you?</div>
  </muc-banner>
</template>
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};