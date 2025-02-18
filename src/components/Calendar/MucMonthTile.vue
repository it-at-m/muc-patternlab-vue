<template>
  <div
    @click="clicked"
    @keyup.enter="clicked"
    :class="{
      'disabled-tile': isDisabled,
      'muc-calendar-current-item':
        new Date().getMonth() === date.getMonth() &&
        new Date().getFullYear() === date.getFullYear(),
    }"
    :tabindex="!isDisabled ? '0' : '-1'"
    role="button"
    :aria-label="`${date.toLocaleDateString(LOCALES, { month: 'long' })} auswählen`"
  >
    <p>{{ monthDisplayment(date) }}</p>
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
   * Event emited after selecting a month
   */
  click: [date: Date];
}>();

/**
 * Chosen notation for date.toLocaleDateString() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#month
 */
const MONTH_NOTATION = "short";

/**
 * String displayment for a given date
 * @param date to be displayed
 */
const monthDisplayment = (date: Date) =>
  date.toLocaleDateString(LOCALES, { month: MONTH_NOTATION });

/**
 * Determines if this month-tile is disabled
 */
const isDisabled = computed(() => {
  const yearOfDate = date.getFullYear();
  const monthOfDate = date.getMonth();

  const isBeforeMin =
    mucCalData?.minDate.value &&
    (yearOfDate < mucCalData.minDate.value.getFullYear() ||
      (yearOfDate === mucCalData.minDate.value.getFullYear() &&
        monthOfDate < mucCalData.minDate.value.getMonth()));

  const isAfterMax =
    mucCalData?.maxDate.value &&
    (yearOfDate > mucCalData.maxDate.value.getFullYear() ||
      (yearOfDate === mucCalData.maxDate.value.getFullYear() &&
        monthOfDate > mucCalData.maxDate.value.getMonth()));

  return isBeforeMin || isAfterMax;
});

/**
 * Action upon selecting a month - triggers emit
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
