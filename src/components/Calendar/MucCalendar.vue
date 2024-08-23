<template>
  <div>
    <div
      style="
        border: 1px solid var(--color-neutrals-blue);
        min-width: 300px;
        max-width: 1200px;
        justify-content: center;
      "
    >
      <div
        id="caption"
        style="
          padding: 5px;
          border-bottom: 1px solid var(--color-neutrals-blue);
          background-color: var(--color-neutrals-blue-xlight);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
        "
      >
        <muc-button
          @click="prevMonth"
          variant="ghost"
          icon="chevron-left"
        />
        <header style="justify-content: center; display: flex">
          <h3>{{ computedCaption }}</h3>
        </header>
        <muc-button
          @click="nextMonth"
          variant="ghost"
          icon="chevron-right"
        />
      </div>
      <div
        id="table-header"
        class="container"
        style="border-bottom: 1px solid var(--color-neutrals-blue)"
      >
        <div
          class="header-item"
          v-for="(weekDay, index) in weekDays"
          :key="index"
        >
          <strong>{{ weekDay }}</strong>
        </div>
      </div>
      <div
        id="table"
        class="container"
      >
        <div
          v-for="blank in numOfDisplayedSpacers"
          :key="blank"
        />
        <muc-day-tile
          v-for="date in NUM_OF_DISPLAYED_DAYS"
          class="item"
          :date="addDaysToDate(computedStartDate, date)"
          :view-date="viewDate"
          :selected-date="selectedDate"
          :only-curr-month="onlyCurrentMonth"
          @click="clickedDate"
          :key="date"
        />
      </div>
    </div>
    <div>selectedDate: {{ computedStartDate.getDay() }}</div>
    <div>viewDate: {{ viewDate }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";
import MucDayTile from "./MucDayTile.vue";

const DAYS_IN_WEEK = 7;

const NUM_OF_DISPLAYED_DAYS = 6 * DAYS_IN_WEEK;

const weekDays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

type CalendarTypes = "single" | "multiple" | "range";

const props = withDefaults(
  defineProps<{
    onlyCurrentMonth?: boolean;
    variant?: CalendarTypes;
  }>(),
  {
    onlyCurrentMonth: false,
    variant: "single",
  }
);

/**
 * Determines the current shown month and year
 */
const viewDate = ref<Date>(
  new Date(new Date().getFullYear(), new Date().getMonth(), 1)
);

/**
 * Currently selected date by the user
 */
const selectedDate = defineModel<Date>("modelValue", { default: new Date() });

const computedCaption = computed(() => {
  return viewDate.value.toLocaleDateString("de-De", {
    month: "long",
    year: "numeric",
  });
});

const firstDateOfMonth = computed(
  () => new Date(viewDate.value.getFullYear(), viewDate.value.getMonth(), 1)
);

const computedStartDate = computed(() =>
  addDaysToDate(firstDateOfMonth.value, -firstDateOfMonth.value.getDay() || -7)
);

const numOfDisplayedSpacers = computed(() =>
  props.onlyCurrentMonth ? firstDateOfMonth.value.getDay() - 1 : 0
);

const computedCalendar = computed(() => {
  const daysOfMonth = new Date(
    viewDate.value.getFullYear(),
    viewDate.value.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth =
    new Date(
      viewDate.value.getFullYear(),
      viewDate.value.getMonth(),
      1
    ).getDay() || 7;
  const lastDayOfPrevMonth = new Date(
    viewDate.value.getFullYear(),
    viewDate.value.getMonth(),
    0
  ).getDate();

  return {
    daysOfMonth,
    firstDayOfMonth,
    lastDayOfPrevMonth,
  };
});

const prevMonth = () => {
  viewDate.value = new Date(
    viewDate.value.setMonth(viewDate.value.getMonth() - 1)
  );
};

// No modulo needed here!
const nextMonth = () => {
  viewDate.value = new Date(
    viewDate.value.setMonth(viewDate.value.getMonth() + 1)
  );
};

const clickedDate = (date: Date) => (selectedDate.value = date);

const addDaysToDate = (date: Date, days: number) =>
  new Date(new Date(date).setDate(date.getDate() + days));
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(7, minmax(auto, 1fr));
  justify-self: center;
  gap: 2px 2px;
  padding: 5px;
}
.header-item {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 5px;
}

.item {
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  padding: 8px;
  transition: border-color 0.3s ease-in;
}
.item:hover {
  border: 1px solid var(--color-neutrals-blue);
  transition: border-color 0.1s ease-out;
  cursor: pointer;
}

.other-month {
  color: blue;
}

.header #calendar-container-outer {
  border: 1px solid var(--color-neutrals-blue);
  display: inline-block;
}
#calendar-container-header {
  border-bottom: 1px solid var(--color-neutrals-blue);
  background-color: var(--color-neutrals-blue-xlight);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
}

.selected {
  background: var(--color-brand-main-blue);
  color: white;
}

#calendar-table-header {
  display: grid;
  grid-template-columns: repeat(7, auto);
  align-items: center;
}
</style>
