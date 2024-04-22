<template>
  <div>
    <muc-callout type="success">
      <template v-slot:header> Success </template>
      <template v-slot:content> Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </template>
    </muc-callout>

    <muc-callout type="info">
      <template v-slot:header> Information </template>
      <template v-slot:content> Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </template>
    </muc-callout>

    <muc-callout type="warning">
      <template v-slot:header> Warning </template>
      <template v-slot:content> Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </template>
    </muc-callout>

    <muc-callout type="error">
      <template v-slot:header> Error </template>
      <template v-slot:content> Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </template>
    </muc-callout>
  </div>
</template>

<script setup lang="ts">
import MucCallout from '../../../../src/components/Callout/MucCallout.vue'
</script>

<style scoped>
div * {
  margin-top: 36px;
  margin-bottom: 16px;
  padding-bottom: 16px;
}
</style>
