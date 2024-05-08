import{d as m,M as h}from"./index-CYA1ieEu.js";import{u as p}from"./index-CLubqjcJ.js";import"./iframe-CJPUjlAC.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=m,j=Symbol.for("react.element"),f=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,v=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,c){var r,s={},i=null,l=null;c!==void 0&&(i=""+c),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)y.call(e,r)&&!g.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:j,type:t,key:i,ref:l,props:s,_owner:v.current}}o.Fragment=f;o.jsx=u;o.jsxs=u;d.exports=o;var n=d.exports;function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`npm i @muenchen/muc-patternlab-vue
`})}),`
`,n.jsx(e.h2,{id:"setup",children:"Setup"}),`
`,n.jsx(e.p,{children:"This setup assumes your client app is created with Vite and vue-ts template."}),`
`,n.jsxs(e.p,{children:["In your ",n.jsx(e.code,{children:"package.json"}),", you shall have the dependencies compatible with the following:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"dependencies": {
  "vue": "^3.4.0"
}
`})}),`
`,n.jsxs(e.p,{children:["In your ",n.jsx(e.code,{children:"vite.config.ts"}),", you shall configure to dedupe ",n.jsx(e.code,{children:"vue"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export default defineConfig({
  resolve: {
    dedupe: ["vue"],
  },
});
`})}),`
`,n.jsx(e.p,{children:"In your Webcomponents root you should import the MDE5-CSS and SVG-Sprite for MDE5-Icons:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<script
  lang="ts"
  setup
>
  import sprites from "@muenchen/muc-patternlab-vue/dist/assets/temporary/muc-icons.svg?raw";
<\/script>

<template>
  <div>
    <svg
      style="display: none;"
      v-html="sprites"
    ></svg>
    <...>
  </div>
</template>

<style>
  @import "@muenchen/muc-patternlab-vue/dist/assets/temporary/muenchende-style.css";
  @import "@muenchen/muc-patternlab-vue/dist/assets/temporary/custom-style.css";
</style>
`})}),`
`,n.jsx(e.p,{children:"Import components from this library in your own component:"}),`
`,n.jsx(e.p,{children:"e.G. Using the MucBanner-Component:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<script setup>
  import { MucBanner } from "@muenchen/muc-patternlab-vue";
<\/script>

<template>
  <muc-banner title="Hello Muc">
    <div>How are you?</div>
  </muc-banner>
</template>
`})})]})}function N(t={}){const{wrapper:e}={...p(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{N as default};
