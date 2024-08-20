<template>
  <div>
    <div
      id="outer"
      style="
        border: 1px solid var(--color-neutrals-blue);
        width: 400px;
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
          v-for="prevDay in computedCalendar.firstDayOfMonth - 1"
          @click="clickedDay(-computedCalendar.firstDayOfMonth + prevDay + 1)"
          class="item"
          style="color: var(--color-neutrals-blue"
          :class="isSelected(-computedCalendar.firstDayOfMonth + prevDay + 1)"
          :key="-computedCalendar.firstDayOfMonth + prevDay + 1"
        >
          {{
            computedCalendar.lastDayOfPrevMonth -
            computedCalendar.firstDayOfMonth +
            prevDay +
            1
          }}
        </div>
        <div
          v-for="day in computedCalendar.daysOfMonth"
          @click="clickedDay(day)"
          class="item"
          :class="isSelected(day)"
          :key="day"
        >
          {{ day }}
        </div>
        <div
          v-for="nextDay in NUM_OF_DISPLAYED_DAYS -
          computedCalendar.firstDayOfMonth -
          computedCalendar.daysOfMonth +
          1"
          @click="clickedDay(nextDay + computedCalendar.daysOfMonth)"
          class="item"
          style="color: var(--color-neutrals-blue"
          :class="isSelected(nextDay + computedCalendar.daysOfMonth)"
          :key="nextDay + computedCalendar.daysOfMonth"
        >
          {{ nextDay }}
        </div>
      </div>
    </div>
    {{ selectedDate }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";
import { Week } from "./MucCalendarType";

const DAYS_IN_WEEK = 7;

const NUM_OF_DISPLAYED_DAYS = 6 * DAYS_IN_WEEK;

const weekDays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

type CalendarTypes = "single" | "multiple" | "range";

/**
 * Determines the current shown month and year
 */
const viewDate = ref<Date>(new Date());

/**
 * Currently selected date by the user
 */
const selectedDate = defineModel<Date>("modelValue");

const computedCaption = computed(() => {
  console.log("hello");
  return viewDate.value.toLocaleDateString("de-De", {
    month: "long",
    year: "numeric",
  });
});

const computedCalendar = computed(() => {
  const daysOfMonth = new Date(
    viewDate.value.getFullYear(),
    viewDate.value.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    viewDate.value.getFullYear(),
    viewDate.value.getMonth(),
    1
  ).getDay();
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

const convertIndexToDate = (index: number) =>
  new Date(viewDate.value.getFullYear(), viewDate.value.getMonth(), index);

const clickedDay = (index: number) => {
  selectedDate.value = convertIndexToDate(index);
  console.log(`Clicked ${selectedDate.value}`);
};

const isSelected = (index: number) =>
  convertIndexToDate(index) == selectedDate.value ? "selected" : "";
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

.selected {
  background: var(--color-brand-main-blue);
  color: white;
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

#calendar-table-header {
  display: grid;
  grid-template-columns: repeat(7, auto);
  align-items: center;
}
</style>
