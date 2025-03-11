<template>
  <div
    class="m-comment"
    :class="commentClass"
  >
    <div class="m-comment__head">
      <div
        v-if="showInitials"
        class="m-comment__initials"
      >
        <slot name="initials" />
      </div>
      <div class="m-comment__info">
        <span class="m-comment__author">
          <slot name="author" />
        </span>
        <span v-if="showDate">
          <span class="m-comment__author">
            &nbsp;<slot name="datePrefix" />
          </span>
          <span class="m-comment__date">&nbsp;<slot name="date" /> </span>
        </span>
        <div
          class="m-star-rating"
          role="img"
          :aria-label="`Bewertung: ${rating} von ${MAX_STARS} Sternen`"
        >
          <div
            v-for="n in evaluateRating.fullStars"
            :key="n"
            class="m-star-rating__item m-star-rating__item--full"
          >
            <muc-icon icon="solid-star" />
          </div>
          <div
            v-if="evaluateRating.isHalfStar"
            class="m-star-rating__item m-star-rating__item--half"
          >
            <muc-icon icon="half-star" />
          </div>
          <div
            v-for="n in evaluateRating.emptyStars"
            :key="n"
            class="m-star-rating__item"
          >
            <muc-icon icon="solid-star" />
          </div>
          <div class="m-star-rating__numeric">
            {{ ratingWithDecimalComma }}
          </div>
        </div>
      </div>
    </div>
    <div class="m-comment__body">
      <div class="m-comment__headline">
        <slot name="headline" />
      </div>
      <div class="m-comment__text">
        <slot name="text" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ComputedRef, useSlots } from "vue";

import { MucIcon } from "../Icon";
import CommentType from "./CommentType";

const LOCALES = "de-DE";
const LOWER_THRESHOLD = 0.2;
const UPPER_THRESHOLD = 0.8;
const MAX_STARS = 5;

const slots = useSlots();

type RatingDisplayType = {
  fullStars: number;
  emptyStars: number;
  isHalfStar: boolean;
};

const { rating, variant = "listing" } = defineProps<{
  /**
   * Number of stars to be displayed.
   */
  rating: number;
  /**
   * Choose the variant of the comment. Default is `listing`.
   *
   * This can be either `slider` oder `listing`.
   */
  variant?: CommentType;
}>();

defineSlots<{
  /**
   * Slot for the commenter's initials or avatar.
   */
  initials(): any;
  /**
   * Slot for the author's name or username.
   */
  author(): any;
  /**
   * Prefix for the date (e.g., "am").
   */
  datePrefix(): any;
  /**
   * Slot for the comment's date.
   */
  date(): any;
  /**
   * Slot for the comment's headline or title.
   */
  headline(): any;
  /**
   * Slot for the main text content of the comment.
   */
  text(): any;
}>();

const showDate: ComputedRef<boolean> = computed(() => !!slots["date"]);

const showInitials: ComputedRef<boolean> = computed(() => !!slots["initials"]);

/**
 * Computes class for given variant
 */
const commentClass = computed(() => {
  return variant === "slider" ? "m-comment--slider" : "m-comment--listing";
});

/**
 * Computes rating with min and max limits
 */
const computedRating = computed(() => Math.min(Math.max(rating, 0), MAX_STARS));

/*
 * Converts the dot used on decimal numbers and converts it to a comma.
 */
const ratingWithDecimalComma = computed(() => {
  return computedRating.value.toLocaleString(LOCALES.valueOf(), {
    minimumFractionDigits: 1,
  });
});

/*
Calculates the amount of full, empty and half-stars to be displayed.
 */
const evaluateRating = computed(() => {
  const decimalPart = +(computedRating.value % 1).toFixed(1); // ask Brendan Eich why "3.3 % 1 = 0.2999999999999998" and then come back

  let fullStars = Math.min(Math.floor(computedRating.value), MAX_STARS);
  let emptyStars = Math.floor(MAX_STARS - computedRating.value);
  let isHalfStar = false;

  // evaluating half-stars and if the rating is e.g. 3.8 an extra full star needs to be displayed
  if (decimalPart !== 0.0) {
    if (decimalPart <= LOWER_THRESHOLD) emptyStars++;
    else if (decimalPart >= UPPER_THRESHOLD) fullStars++;
    else isHalfStar = true;
  }

  return {
    fullStars,
    emptyStars,
    isHalfStar,
  } as RatingDisplayType;
});
</script>

<style scoped></style>
