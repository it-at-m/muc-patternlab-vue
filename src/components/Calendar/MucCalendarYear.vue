<template>
  <div class="muc-calendar-container muc-calendar-view-full-size">
    <div
      v-for="date in computedYears"
      class="muc-calendar-item"
      :class="{
        'muc-calendar-current-item':
          new Date().getFullYear() === date.getFullYear(),
      }"
      @click="clickedYear(date)"
    >
      {{ yearDisplayment(date) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { LOCALES, NUM_OF_BROAD_SELECTIONS } from "./MucCalendarType";

/**
 * Chosen notation for date.toLocaleDateString() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#year
 */
const YEAR_NOTATION = "numeric";

const props = defineProps<{
  /**
   * current viewDate for the selection
   */
  viewDate: Date;
}>();

const emit = defineEmits<{
  /**
   * Event emited after selecting a year
   */
  clicked: [date: Date];
}>();

/**
 * Computed years to be displayed in the selection
 */
const computedYears = computed(() =>
  Array.from(
    { length: NUM_OF_BROAD_SELECTIONS },
    (_, i) =>
      new Date(
        props.viewDate.getFullYear() - (props.viewDate.getFullYear() % 10) + i,
        props.viewDate.getMonth()
      )
  )
);

/**
 * String displayment for a given year
 * @param date to be displayed
 */
const yearDisplayment = (date: Date) =>
  date.toLocaleDateString(LOCALES, { year: YEAR_NOTATION });

/**
 * Action upon selecting a year - triggers emit
 * @param date selected year
 */
const clickedYear = (date: Date) => emit("clicked", date);
</script>

<style scoped>
.off-year {
  color: var(--color-neutrals-blue);
}
</style>
