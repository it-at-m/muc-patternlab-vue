<template>
  <div
    @click="clicked"
    @keyup.enter="clicked"
    :class="{
      'disabled-tile': isDisabled,
      'muc-calendar-current-item':
        new Date().getFullYear() === date.getFullYear(),
    }"
    :tabindex="!isDisabled ? '0' : '-1'"
    role="button"
    :aria-label="`${date.toLocaleDateString(LOCALES, { year: YEAR_NOTATION })} auswählen`"
  >
    <p>{{ yearDisplayment(date) }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";

import { LOCALES, MucCalendarKey } from "./MucCalendarType";

const { date } = defineProps<{
  /**
   * Date of for this tile to be displayed
   */
  date: Date;
}>();

/**
 * Injection of data needed for styling calculations
 */
const mucCalData = inject(MucCalendarKey);

const emit = defineEmits<{
  /**
   * Event emited after selecting a year
   */
  click: [date: Date];
}>();

/**
 * Chosen notation for date.toLocaleDateString() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#year
 */
const YEAR_NOTATION = "numeric";

/**
 * String displayment for a given year
 * @param date to be displayed
 */
const yearDisplayment = (date: Date) =>
  date.toLocaleDateString(LOCALES, { year: YEAR_NOTATION });

/**
 * Determines if this year-tile is disabled
 */
const isDisabled = computed(() => {
  const yearOfDate = date.getFullYear();

  const isBeforeMin =
    mucCalData?.minDate.value &&
    yearOfDate < mucCalData.minDate.value.getFullYear();

  const isAfterMax =
    mucCalData?.maxDate.value &&
    yearOfDate > mucCalData.maxDate.value.getFullYear();

  return isBeforeMin || isAfterMax;
});

/**
 * Action upon selecting a year - triggers emit
 */
const clicked = () => {
  if (!isDisabled.value) {
    emit("click", date);
  }
};
</script>

<style scoped>
@import "MucCalendar.css";
</style>
