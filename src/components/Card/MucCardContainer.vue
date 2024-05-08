<script setup lang="ts">

</script>

<template>
  <div class="container card-container">
    <slot />
  </div>
</template>

<style scoped>
@media all and (min-width: 992px) {
  .card-container {
    padding-left: 0;
    padding-right: 0;
    display: grid;
    /* here you set when the width should change to be moved to the next row, in this example, the divs will move when the screen reduces size and their width is less than 200px */
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
    /* here you set when the width should change to be moved to the next row, in this example, the divs will move when the screen reduces size and their width is less than 200px */
    grid-template-columns: 1fr;
    grid-row-gap: 32px;
  }
}
</style>
