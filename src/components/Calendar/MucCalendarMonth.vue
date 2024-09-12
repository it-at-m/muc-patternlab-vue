<template>
  <div class="muc-calendar-container muc-calendar-view-full-size">
    <div
      v-for="(date, index) in computedMonths"
      :key="index"
      :class="{
        'muc-calendar-current-item':
          new Date().getMonth() === date.getMonth() &&
          new Date().getFullYear() === date.getFullYear(),
      }"
      class="muc-calendar-item"
      @click="clickedMonth(date)"
    >
      <p>{{ monthDisplayment(date) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { LOCALES, NUM_OF_BROAD_SELECTIONS } from "./MucCalendarType";

/**
 * Chosen notation for date.toLocaleDateString() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#month
 */
const MONTH_NOTATION = "short";

const props = defineProps<{
  /**
   * current viewDate for the selection
   */
  viewDate: Date;
}>();

const emit = defineEmits<{
  /**
   * Event emitted after selecting a month
   */
  clicked: [date: Date];
}>();

/**
 * Computed months to be displayed in the selection
 */
const computedMonths = computed(() =>
  Array.from(
    { length: NUM_OF_BROAD_SELECTIONS },
    (_, i) => new Date(props.viewDate.getFullYear(), i)
  )
);

/**
 * String displayment for a given date
 * @param date to be displayed
 */
const monthDisplayment = (date: Date) =>
  date.toLocaleDateString(LOCALES, { month: MONTH_NOTATION });

/**
 * Action upon selecting a month - triggers emit
 * @param date selected month
 */
const clickedMonth = (date: Date) => emit("clicked", date);
</script>

<style scoped></style>
