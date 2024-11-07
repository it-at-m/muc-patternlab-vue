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
import CommentType from "./CommentType";

const AUTHOR_NAME_SEPERATOR = " ";

const props = withDefaults(
  defineProps<{
    datePrefix?: string;
    initials?: string;
    author: string;
    date?: string;
    headline?: string;
    text: string;
    rating: number;
    variant?: CommentType;
  }>(),
  {
    datePrefix: "am",
    variant: "listing",
  }
);

/**
 * Initials will be computed if none are given.
 * In the case of an empty author field, an empty string is returned for the initials.
 */
const computedInitials = computed(() => {
  return (
    (
      props.initials ??
      props.author
        .split(AUTHOR_NAME_SEPERATOR)
        .map((word) => word.charAt(0))
        .join("")
    ).match(/^.|.$/g) ?? [""]
  ).join("");
});
</script>

<style scoped></style>
