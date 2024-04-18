<template>
  <div>
    <muc-button>Primary</muc-button>
    <muc-button variant="secondary">Secondary</muc-button>
    <muc-button variant="ghost">Ghost</muc-button>
    <muc-button disabled>Disabled</muc-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
div * {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
