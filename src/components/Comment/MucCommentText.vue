<template>
  <muc-comment
    :rating="rating"
    :variant="variant"
  >
    <template v-slot:initials>{{ computedInitials }}</template>
    <template v-slot:datePrefix>am</template>
    <template v-slot:author>{{ author }}</template>
    <template
      v-if="!!date"
      v-slot:date
      >{{ date }}</template
    >
    <template v-slot:headline>{{ headline }}</template>
    <template v-slot:text>{{ text }}</template>
  </muc-comment>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { MucComment } from "../index";

type CommentType = "listing" | "slider";

const props = withDefaults(
  defineProps<{
    datePrefix?: string;
    initials?: string;
    author: string;
    date?: string;
    headline?: string;
    text: string;
    rating: number;
    variant: CommentType;
  }>(),
  {
    datePrefix: "am",
    variant: "listing",
  }
);

const computedInitials = computed(() => {
  return (
    props.initials ??
    props.author
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
  );
});
</script>

<style scoped></style>
