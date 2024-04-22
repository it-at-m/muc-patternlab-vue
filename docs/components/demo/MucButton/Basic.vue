<template>
  <div>
    <muc-button>Primary</muc-button>
    <muc-button variant="secondary">Secondary</muc-button>
    <muc-button variant="ghost">Ghost</muc-button>
    <muc-button disabled>Disabled</muc-button>
    <muc-button-arrow>Arrow Button</muc-button-arrow>
  </div>
</template>

<script setup lang="ts">
import { MucButtonArrow } from '../../../../src/components/Button'
</script>

<style scoped>
div * {
  margin-bottom: 8px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
}
</style>
