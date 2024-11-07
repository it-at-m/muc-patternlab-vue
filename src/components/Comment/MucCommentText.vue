<template>
  <muc-comment
    :rating="rating"
    :variant="variant"
  >
    <template
      v-if="!!computedInitials"
      v-slot:initials
      >{{ computedInitials }}</template
    >
    <template v-slot:datePrefix>{{ datePrefix }}</template>
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

const AUTHOR_NAME_SEPARATOR = " ";

const {
  datePrefix = "am",
  initials,
  author,
  date,
  variant = "listing",
} = defineProps<{
  /**
   * Text input to display in front of the date text input
   */
  datePrefix?: string;
  /**
   * Optional text input to display the initials of the author next to name
   *
   * (if kept empty will be calculated automatically)
   */
  initials?: string;
  /**
   * Text input to display the author name of the comment
   */
  author: string;
  /**
   * Text input to display the date of the comment
   */
  date?: string;
  /**
   * Text input to display the headline of the comment
   */
  headline?: string;
  /**
   * Text input to display the content of the comment
   */
  text: string;
  /**
   * Rating of the comment in stars, between 0.0 and 5.0
   */
  rating: number;
  /**
   * Choose the variant of the comment. Default is `listing`.
   *
   * This can be either `slider` oder `listing`.
   */
  variant?: CommentType;
}>();

/**
 * Initials will be computed if none are given.
 * In the case of an empty author field, an empty string is returned for the initials.
 */
const computedInitials = computed(() => {
  return (
    (
      initials ??
      author
        .split(AUTHOR_NAME_SEPARATOR)
        .map((word) => word.charAt(0))
        .join("")
    ).match(/^.|.$/g) ?? [""]
  ).join("");
});
</script>
