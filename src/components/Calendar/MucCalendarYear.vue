<template>
  <div class="muc-calendar-container muc-calendar-view-full-size">
    <muc-year-tile
        v-for="(date, index) in computedYears"
        :key="index"
        class="muc-calendar-item"
        :date="date"
        @click="clickedYear(date)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { NUM_OF_BROAD_SELECTIONS } from "./MucCalendarType";
import MucYearTile from "./MucYearTile.vue";

const props = defineProps<{
  /**
   * current viewDate for the selection
   */
  viewDate: Date;
}>();

const emit = defineEmits<{
  /**
   * Event emitted after selecting a year
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
 * Action upon selecting a year - triggers emit
 * @param date selected year
 */
const clickedYear = (date: Date) => emit("clicked", date);
</script>

<style scoped>
@import "MucCalendar.css";

.off-year {
  color: var(--color-neutrals-blue);
}
</style>
