<script setup>
import sprites from "../../../public/assets/temporary/muc-icons.svg?raw"
</script>

<template>
  <div>
    <svg
        style="display: none;"
        v-html="sprites">
    </svg>

    <div class="demo-container">
      <slot></slot>
    </div>
  </div>
</template>