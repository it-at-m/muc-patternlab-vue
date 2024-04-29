<template>
  <div class="m-comment" :class="commentClass">
    <div class="m-comment__head">
      <div class="m-comment__initials">
        <slot name="initials" />
      </div>
      <div class="m-comment__info">
        <span class="m-comment__author">
          <slot name="author" />
        </span>
        <span v-if="showDate">
          <span class="m-comment__author">&nbsp;<slot name="datePrefix" /></span>
          <span class="m-comment__date">&nbsp;<slot name="date" /> </span>
        </span>
        <div
          class="m-star-rating"
          role="img"
          :aria-label="`Rating: ${rating} out of ${MAX_STARS} stars`"
        >
          <div
            v-for="n in evaluateRating.fullStars"
            :key="n"
            class="m-star-rating__item m-star-rating__item--full"
          >
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-solid-star"></use>
            </svg>
          </div>
          <div
            v-if="evaluateRating.isHalfStar"
            class="m-star-rating__item m-star-rating__item--half"
          >
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-half-star"></use>
            </svg>
          </div>
          <div v-for="n in evaluateRating.emptyStars" :key="n" class="m-star-rating__item">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-solid-star"></use>
            </svg>
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
import { computed, useSlots } from 'vue'

const LOCALES = 'de-DE'
const LOWER_THRESHOLD = 0.2
const UPPER_THRESHOLD = 0.8
const MAX_STARS = 5

const slots = useSlots()

type RatingDisplayType = {
  fullStars: number
  emptyStars: number
  isHalfStar: boolean
}

type CommentType = 'listing' | 'slider'

const props = withDefaults(
  defineProps<{
    rating: number
    variant?: CommentType
  }>(),
  {
    variant: 'listing'
  }
)

const showDate = computed(() => {
  return !!slots['date']
})

const commentClass = computed(() => {
  return props.variant === 'slider' ? 'm-comment--slider' : 'm-comment--listing'
})

/*
 * Converts the dot used on decimal numbers and converts it to a comma.
 */
const ratingWithDecimalComma = computed(() => {
  return props.rating.toLocaleString(LOCALES.valueOf(), { minimumFractionDigits: 1 })
})

/*
Calculates the amount of full, empty and half-stars to be displayed.
 */
const evaluateRating = computed(() => {
  const decimalPart = +(props.rating % 1).toFixed(1) // ask Brendan Eich why "3.3 % 1 = 0.2999999999999998" and then come back

  let fullStars = Math.min(Math.floor(props.rating), MAX_STARS)
  let emptyStars = Math.floor(MAX_STARS - props.rating)
  let isHalfStar = false

  // evaluating half-stars and if the rating is e.g. 3.9 an extra full star needs to be displayed
  if (props.rating !== 0.0 && props.rating !== MAX_STARS) {
    if (decimalPart <= LOWER_THRESHOLD) emptyStars++
    else if (decimalPart >= UPPER_THRESHOLD) fullStars++
    else isHalfStar = true
  }

  return {
    fullStars,
    emptyStars,
    isHalfStar
  } as RatingDisplayType
})
</script>

<style scoped></style>
