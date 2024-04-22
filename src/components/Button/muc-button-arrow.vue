<template>
  <muc-button>
    <span>
      <slot />
      <svg aria-hidden="true" class="m-button__icon">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </span>
  </muc-button>
</template>

<script setup lang="ts">
import MucButton from './MucButton.vue'
</script>
