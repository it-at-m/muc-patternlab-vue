<script setup lang="ts">
const props = defineProps({
  expanded: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="m-button m-button--primary m-button--animated-right">
    <slot />
  </button>
</template>

<style scoped></style>
