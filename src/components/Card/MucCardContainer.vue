<template>
  <div class="container card-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  /**
   * MucCards can be put into this slot.
   */
  default(): unknown;
}>();
</script>

<style scoped>
@media all and (min-width: 992px) {
  .card-container {
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 384px);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }
}

@media all and (max-width: 992px) {
  .card-container {
    padding-left: 0;
    padding-right: 0;
    display: inline-grid;
    grid-template-columns: 1fr;
    grid-row-gap: 32px;
  }
}
</style>
