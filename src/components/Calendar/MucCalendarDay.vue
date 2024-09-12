<template>
  <div class="muc-calendar-view-full-size">
    <div class="muc-calendar-container table-header">
      <div
        class="header-item"
        v-for="(weekDay, index) in WEEKDAYS"
        :key="index"
      >
        <strong>{{ weekDay }}</strong>
      </div>
    </div>
    <div class="muc-calendar-container">
      <div
        v-for="blank in numOfDisplayedSpacers"
        :key="blank"
      />
      <muc-day-tile
        v-for="date in NUM_OF_DISPLAYED_DAYS"
        class="muc-calendar-item"
        :date="addDaysToDate(computedStartDate, date)"
        :show-adjacent-months="showAdjacentMonths"
        @click="clickedDate"
        :key="date"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { CalendarTypes } from "./MucCalendarType";
import MucDayTile from "./MucDayTile.vue";

const DAYS_IN_WEEK = 7;

const NUM_OF_DISPLAYED_DAYS = 6 * DAYS_IN_WEEK;

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const props = defineProps<{
  /**
   * Current year and month in the view
   */
  viewDate: Date;

  /**
   * Type of possible day selection - single, multiple or range
   */
  variant: CalendarTypes;

  /**
   * Determines if selection of day should be disabled
   */
  disabled: boolean;

  /**
   * Determines if days of adjacent months (before and after) should be shown or not
   */
  showAdjacentMonths: boolean;
}>();

const emit = defineEmits<{
  /**
   * Event emitted after selecting a day
   */
  clicked: [date: Date];
}>();

/**
 * Computes the day (Mo, Tu, We,...) of the first day in current view month
 */
const firstDateOfMonth = computed(
  () => new Date(props.viewDate.getFullYear(), props.viewDate.getMonth(), 1)
);

/**
 * Calculates the amount of spacers needed if no days of the pre-month should be shown
 */
const numOfDisplayedSpacers = computed(() =>
  props.showAdjacentMonths ? 0 : (firstDateOfMonth.value.getDay() || 7) - 1
);

/**
 * Computes the starting date (of the prev month) the current view should start on (e.g. 26. of August)
 */
const computedStartDate = computed(() =>
  addDaysToDate(firstDateOfMonth.value, -firstDateOfMonth.value.getDay() || -7)
);

/**
 * Handles a date click event based on the selected variant.
 * Depending on whether the variant is "single", "multiple", or "range", it calls the appropriate function to update the selected date(s).
 * @param date - The date that was clicked.
 */
const clickedDate = (date: Date) => {
  emit("clicked", date);
};

/**
 * Adds a given number of days to a given date and returns the new date.
 * This function does not modify the original date object.
 * @param date - The original date.
 * @param days - The number of days to add to the date.
 */
const addDaysToDate = (date: Date, days: number) =>
  new Date(new Date(date).setDate(date.getDate() + days));
</script>

<style scoped>
.muc-calendar-container {
  --container-grid-count: 7;
}

.table-header {
  border-bottom: 1px solid var(--color-neutrals-blue);
}

.header-item {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 5px;
}

.table-header {
  border-bottom: 1px solid var(--color-neutrals-blue);
}
</style>
