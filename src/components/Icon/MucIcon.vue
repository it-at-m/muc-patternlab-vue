<template>
  <svg
    aria-hidden="true"
    class="m-button__icon"
    :style="{ color: color }"
  >
    <use :xlink:href="'#icon-' + icon" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  color?: string;
}>();
</script>
