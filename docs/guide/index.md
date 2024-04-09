# Getting Started

You may add the usage of the library here.

## Setup

This setup assumes your client app is created with Vite and vue-ts template, and you use 'npm link' to link to `my-lib` locally.

In your `package.json`, you shall have the dependencies compatible with the following:

```json
"dependencies": {
  "vue": "^3.2.25"
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

In your `main.ts`, you shall import the libraries and CSS:

```ts
import 'my-lib/dist/style.css';
```

In your Webcomponents Entry you should import the css and svg sprite for MDE5-Icons:

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

```html
<script setup lang="ts">
    import { MucBanner } from "@muenchen/muc-patternlab-vue";
</script>
```
