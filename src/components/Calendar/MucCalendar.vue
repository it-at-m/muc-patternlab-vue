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
          border-bottom: 1px solid var(--color-neutrals-blue);
          background-color: var(--color-neutrals-blue-xlight);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
        "
      >
        <muc-button
          @click="computeDisplayedDays"
          variant="ghost"
          icon="chevron-left"
        />
        <header style="justify-content: center; display: flex">Month</header>
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
          {{ weekDay }}
        </div>
      </div>
      <div
        id="table"
        class="container"
      >
        <div
          class="item"
          v-for="index in 35"
          :key="index"
          @click="clickedDay"
          :class="isSelected(index)"
        >
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";
import { MucDivider } from "../Divider";
import { Week } from "./MucCalendarType";

const DAYS_IN_WEEK = 7;

const weekDays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

type CalendarTypes = "single" | "multiple" | "range";

const currDate = ref<Date>(new Date());

const displayedDaysRef = ref<Week[]>([]);

const prevMonth = () => currDate.value.setMonth(currDate.value.getMonth() - 1);

// No modulo needed here!
const nextMonth = () => currDate.value.setMonth(currDate.value.getMonth() + 1);

const clickedDay = () => console.log("Clicked on a day");

const isSelected = (index: number) => (index == 15 ? "selected" : "");

const computeDisplayedDays = () => {
  const year = currDate.value.getFullYear();
  const month = currDate.value.getMonth();
  const day = currDate.value.getDay();

  const firstDay = new Date(year, month, 1).getDay();
  // No modulo needed here! Day zero is the last day of the month beforehand
  const lastDay = new Date(year, month + 1, 0).getDate();
  const lastDay2 = new Date(year, month + 1, 0).getDay();

  const numOfWeeks = Math.ceil((firstDay + lastDay) / DAYS_IN_WEEK);

  const numOfDisplayedDays = numOfWeeks * DAYS_IN_WEEK;

  const displayedDays: Week[] = [];

  for (let i = 0; i < numOfWeeks; i++) {
    displayedDays[i] = [];
  }

  // fill days of prev months
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  console.table({
    prevMonthLastDay,
    firstDay,
    lastDay,
  });

  for (let i = 0; i < firstDay; i++) {
    displayedDays[0][i] = {
      day: prevMonthLastDay - firstDay + i + 2,
      month: month - 1,
    };
  }

  // fill days of current months
  for (let i = firstDay; i <= lastDay; i++) {
    let week = Math.floor((i - 1) / DAYS_IN_WEEK);
    displayedDays[week][(i - 1) % DAYS_IN_WEEK] = {
      day: i - firstDay + 1,
      month: month,
    };
  }

  //fill days of next months
  /**for (let i = 1; ;i++) {
    displayedDays[numOfWeeks -1][(i - 1) % DAYS_IN_WEEK] =
  }**/

  return displayedDays;
};

const calendarData = computed(() => {
  const year = currDate.value.getFullYear();
  const month = currDate.value.getMonth();
  const day = currDate.value.getDay();

  const firstDay = new Date(year, month, 1).getDay();
  // No modulo needed here! Day zero is the last day of the month beforehand
  const lastDay = new Date(year, month + 1, 0).getDay();

  const numOfWeeks = Math.ceil((firstDay + lastDay) / DAYS_IN_WEEK);

  return {
    year,
    month,
    day,
    numOfWeeks,
    firstDay,
    lastDay,
  };
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(7, minmax(auto, 1fr));
  justify-self: center;
  gap: 5px 5px;
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
  padding: 5px;
  transition: border-color 0.3s ease-in;
}
.item:hover {
  border: 1px solid var(--color-neutrals-blue);
  transition: border-color 0.1s ease-out;
  cursor: pointer;
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
