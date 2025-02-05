<template>
  <div class="muc-calendar-container muc-calendar-view-full-size">
    <muc-month-tile
      v-for="(date, index) in computedMonths"
      :key="index"
      class="muc-calendar-item"
      :date="date"
      @click="clickedMonth"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { NUM_OF_BROAD_SELECTIONS } from "./MucCalendarType";
import MucMonthTile from "./MucMonthTile.vue";

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
 * Action upon selecting a month - triggers emit
 * @param date selected month
 */
const clickedMonth = (date: Date) => emit("clicked", date);
</script>

<style scoped>
@import "MucCalendar.css";
</style>
