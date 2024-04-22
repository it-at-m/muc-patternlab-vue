<template>
  <muc-comment :rating="rating" :slider="slider" :dot-divider="dotDivider">
    <template v-slot:initials>{{ computedInitials }}</template>
    <template v-slot:author>{{ author }}</template>
    <template v-slot:date>{{ date }}</template>
    <template v-slot:headline>{{ headline }}</template>
    <template v-slot:text>{{ text }}</template>
  </muc-comment>
</template>

<script setup lang="ts">
import { MucComment } from "../index"
import { ratingType } from "./RatingType"
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    dotDivider: boolean
    initials?: string
    author: string
    date: string
    headline?: string
    text: string
    rating: ratingType
    slider: boolean
  }>(),
  {
    dotDivider: false,
    slider: false,
  }
)

const computedInitials = computed(() => {
  return (
    props.initials ??
    props.author
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
  )
})
</script>

<style scoped></style>
