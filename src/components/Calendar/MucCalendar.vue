<template>
  <div>
    <muc-button @click="prevMonth"></muc-button>
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
        <tr>
          <td>01</td>
          <td>01</td>
          <td>01</td>
          <td>01</td>
          <td>01</td>
          <td>01</td>
          <td>01</td>
          <td>01</td>
          <td>01</td>
          <td>01</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { MucButton } from "../Button";

const currDate = ref<Date>(new Date());

const prevMonth = () => currDate.value.setMonth(currDate.value.getMonth() - 1);

const nextMonth = () => currDate.value.setMonth(currDate.value.getMonth() + 1);

const calendarData = computed(() => {
  return {
    firstDay: 4,
    lastDay: 31,
    totalDays: 35,
  };
});
</script>

<style scoped></style>
