<template>
  <div>
    <muc-button @click="computeDisplayedDays"></muc-button>
    <header>Header</header>
    <button @click="nextMonth"></button>
    <table>
      <thead>
        <tr>
          <th>Mo</th>
          <th>Di</th>
          <th>Mi</th>
          <th>Do</th>
          <th>Fr</th>
          <th>Sa</th>
          <th>So</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(week, index) in computeDisplayedDays()"
          :key="index"
        >
          <td
            v-for="(day, dIndex) in week"
            :key="dIndex"
          >
            {{ day.day }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";
import { Week } from "./MucCalendarType";

const DAYS_IN_WEEK = 7;

type CalendarTypes = "single" | "multiple" | "range";

const currDate = ref<Date>(new Date());

const displayedDaysRef = ref<Week[]>([]);

const prevMonth = () => currDate.value.setMonth(currDate.value.getMonth() - 1);

// No modulo needed here!
const nextMonth = () => currDate.value.setMonth(currDate.value.getMonth() + 1);

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

<style scoped></style>
