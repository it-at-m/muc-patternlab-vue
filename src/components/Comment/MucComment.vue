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
        <span v-if="dotDivider"> &bull; </span>
        <span v-else> am </span>
        <span class="m-comment__date">
          <slot name="date" />
        </span>
        <div
          class="m-star-rating"
          role="img"
          :aria-label="`Rating: ${ratingNumber} out of ${MAX_STARS} stars`"
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
import { computed, readonly } from "vue"
import { ratingType } from "./RatingType"

const MAX_STARS = readonly<Number>(5)
const LOCALES = readonly<String>("de-DE")

type ratingDisplayType = {
  fullStars: number
  emptyStars: number
  isHalfStar: boolean
}

const props = withDefaults(
  defineProps<{
    rating: ratingType
    slider: boolean
    dotDivider: boolean
  }>(),
  {
    dotDivider: false,
    slider: false,
  }
)

const divider = computed(() => {
  return props.dotDivider ? " &bull; " : " am "
})

const commentClass = computed(() => {
  return props.slider ? "m-comment--slider" : "m-comment--listing"
})

const ratingNumber = computed(() => {
  return Number(props.rating)
})
const ratingWithDecimalComma = computed(() => {
  return ratingNumber.value.toLocaleString(LOCALES.valueOf(), { minimumFractionDigits: 1 })
})

const evaluateRating = computed(() => {
  const fullStars = Math.floor(ratingNumber.value)
  const isHalfStar = ratingNumber.value % 1 !== 0
  const emptyStars = Math.floor(MAX_STARS.valueOf() - ratingNumber.value)

  return {
    fullStars,
    emptyStars,
    isHalfStar,
  } as ratingDisplayType
})
</script>

<style scoped></style>
