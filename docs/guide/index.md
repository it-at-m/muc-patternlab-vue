# Getting Started

## Installation

```shell
npm i @muenchen/muc-patternlab-vue
```

## Setup

This setup assumes your client app is created with Vite and vue-ts template.

In your `package.json`, you shall have the dependencies compatible with the following:

```json
"dependencies": {
  "vue": "^3.4.0"
}
```

In your `vite.config.ts`, you shall configure to dedupe `vue`:

```ts
export default defineConfig({
  resolve: {
    dedupe: ['vue'],
  },
});
```

In your Webcomponents root you should import the MDE5-CSS and SVG-Sprite for MDE5-Icons:

```html
<script lang="ts" setup>
    import sprites from "@muenchen/muc-patternlab-vue/dist/assets/temporary/muc-icons.svg?raw";
</script>

<template>
    <div>
        <svg
                style="display: none;"
                v-html="sprites">
        </svg>
        <...>
    </div>
</template>

<style>
@import "@/assets/muenchende-style.css";
</style>
```

Import components from this library in your own component:

e.G. Using the MucBanner-Component:

```vue
<script setup>
import { MucBanner } from "@muenchen/muc-patternlab-vue";
</script>

<template>
  <muc-banner title="Hello Muc">
    <div>How are you?</div>
  </muc-banner>
</template>
```