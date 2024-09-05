<template>
  <div>
    <div v-for="month in months">{{ month }}</div>
  </div>
</template>

<script setup lang="ts">
const months = ["Januar", "Februar", "März", "April"];
</script>

<style scoped></style>
