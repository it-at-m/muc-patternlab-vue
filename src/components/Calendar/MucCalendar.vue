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
        id="table"
        class="container"
      >
        <div
          class="item"
          v-for="(weekDay, index) in weekDays"
          :key="index"
        >
          {{ weekDay }}
        </div>
        <div
          class="item"
          v-for="index in 35"
          :key="index"
          @click=""
        >
          {{ index }}
        </div>
      </div>
    </div>
    <div>
      <div id="calendar-container-header">
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

      <div>
        <div id="calendar-column">
          <div id="calendar-row">Monat</div>
        </div>
      </div>
      <table>
        <caption>
          Monat
        </caption>
        <colgroup>
          <col
            span="7"
            style="justify-content: center; display: flex"
          />
        </colgroup>
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
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";
import { Week } from "./MucCalendarType";

const DAYS_IN_WEEK = 7;

const weekDays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

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

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(7, auto);
  padding: 10px;
  gap: 20px 20px;
}
.item {
  justify-self: center;
}

#calendar-container-outer {
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
