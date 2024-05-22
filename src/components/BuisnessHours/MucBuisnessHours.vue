<template>
  <div class="m-business-hours-toggle">
    <h3 class="m-business-hours-toggle__title visually-hidden">
      Öffnungszeiten
    </h3>
    <button
      class="m-business-hours-toggle__trigger is-open collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#unique-example-id"
      aria-expanded="false"
      aria-controls="unique-example-id"
    >
      <svg
        aria-hidden="true"
        class="icon icon--before"
      >
        <use xlink:href="#icon-time"></use>
      </svg>
      <span>Mi geöffnet 09:00 - 12:00 und 13:00 - 20:00</span>
      <svg
        aria-hidden="true"
        class="icon icon--after"
      >
        <use xlink:href="#icon-chevron-down"></use>
      </svg>
    </button>
    <div class="m-business-hours-toggle__content collapse">
      <ul class="ml-0">
        <li
          v-for="day in buisnessHours"
          :key="day.weekDay"
          :class="setClosedClass(day.openingHours)"
        >
          <span class="weekday">{{ day.weekDay }}</span>
          <span class="hours">
            <div v-if="day.openingHours.length === 0">geschlossen</div>
            <div
              v-else
              v-for="time in day.openingHours"
              :key="time.from"
            >
              {{ time.from }} - {{ time.to }}
            </div>
          </span>
        </li>
      </ul>
      <p class="hint">
        <slot name="hint" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import {
  BuisnessHourType,
  OpeningHour,
  weekDaysMapping,
} from "./BuisnessHourType";

const props = defineProps<{
  buisnessHours: BuisnessHourType[];
}>();

defineSlots<{
  hint(): any;
}>();

const setClosedClass = (openHours: OpeningHour[]) => {
  return openHours.length === 0 ? "is-closed" : "";
};

const getTodaysBuisnessHours = computed(() => {
  const today = new Date();
  const todaysDay = weekDaysMapping[today.getDay()];

  return "";
});
</script>

<style scoped></style>
