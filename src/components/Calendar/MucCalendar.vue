<template>
  <div>
    <div
      style="
        border: 1px solid var(--color-neutrals-blue);
        min-width: 330px;
        max-width: 900px;
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
          :variant="variant"
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
import {
  CalendarTypes,
  isEqualDates,
  MucCalendarSelected,
} from "./MucCalendarType";
import MucDayTile from "./MucDayTile.vue";

const DAYS_IN_WEEK = 7;

const NUM_OF_DISPLAYED_DAYS = 6 * DAYS_IN_WEEK;

const weekDays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

/**
 * Determines the current shown month and year
 */
const viewDate = ref<Date>(
  new Date(new Date().getFullYear(), new Date().getMonth(), 1)
);

/**
 * Currently selected date by the user
 */
const selectedDate = defineModel<MucCalendarSelected>("modelValue", {
  default: new Date(),
});

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
  props.onlyCurrentMonth ? (firstDateOfMonth.value.getDay() || 7) - 1 : 0
);

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

/**
 * If a different type as single was previously chosen - the datatype will be converted to a single date.
 * The newly selected date will be compared to the current selected date and either deleted or set.
 * @param newValue is the newly selected date.
 */
const updateMVSingle = (newValue: Date) => {
  if (!(selectedDate.value instanceof Date || selectedDate.value === null))
    selectedDate.value = Object.values(selectedDate.value)[0];

  selectedDate.value =
    selectedDate.value === null || !isEqualDates(selectedDate.value, newValue)
      ? newValue
      : null;
};

const updateMVMultiple = (newValue: Date) => {
  if (selectedDate.value === null) selectedDate.value = [];
  else if (selectedDate.value instanceof Date)
    selectedDate.value = [selectedDate.value];
  else if ("from" in selectedDate.value && "to" in selectedDate.value)
    // TODO - find better method of differentiating the type
    selectedDate.value = [
      selectedDate.value.from,
      selectedDate.value.to,
    ].filter((date) => date !== null);

  selectedDate.value.includes(newValue)
    ? selectedDate.value.filter((val: Date) => val !== newValue)
    : [...selectedDate.value, newValue];
};

const updateMVRange = (newValue: Date) => {
  if (selectedDate.value === null || selectedDate.value.constructor === Array)
    selectedDate.value = { from: null, to: null };
  else if (selectedDate.value instanceof Date)
    selectedDate.value = { from: selectedDate.value, to: null };

  selectedDate.value = selectedDate.value.from!
    ? { from: selectedDate.value.from!, to: newValue }
    : { from: newValue, to: null };
};

const clickedDate = (date: Date) => {
  switch (props.variant) {
    case "single":
      updateMVSingle(date);
      break;
    case "multiple":
      updateMVMultiple(date);
      break;
    case "range":
      updateMVRange(date);
      break;
  }
};

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
