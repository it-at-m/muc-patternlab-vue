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
import { MaxStars, RatingType } from './RatingType'

const LOCALES = 'de-DE'

const slots = useSlots()

type ratingDisplayType = {
  fullStars: number
  emptyStars: number
  isHalfStar: boolean
}

const props = withDefaults(
  defineProps<{
    rating: RatingType
    slider: boolean
  }>(),
  {
    slider: false
  }
)

const showDate = computed(() => {
  return !!slots['date']
})

const commentClass = computed(() => {
  return props.slider ? 'm-comment--slider' : 'm-comment--listing'
})

const ratingWithDecimalComma = computed(() => {
  return props.rating.toLocaleString(LOCALES.valueOf(), { minimumFractionDigits: 1 })
})

const evaluateRating = computed(() => {
  const fullStars = Math.floor(props.rating)
  const isHalfStar = props.rating % 1 !== 0
  const emptyStars = Math.floor(MaxStars - props.rating)

  return {
    fullStars,
    emptyStars,
    isHalfStar
  } as ratingDisplayType
})
</script>

<style scoped></style>
