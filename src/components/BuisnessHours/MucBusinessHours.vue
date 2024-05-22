<template>
  <div class="m-business-hours-toggle">
    <h3 class="m-business-hours-toggle__title visually-hidden">
      Öffnungszeiten
    </h3>
    <button
      v-if="toggleable"
      @click="toggleCollapsable"
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
      <div v-if="todaysBusinessHours">
        <span> {{ todaysBusinessHours.weekDay }} geöffnet </span>
        <span
          v-for="(time, index) in todaysBusinessHours.openingHours"
          :key="index"
        >
          {{ time.from }} bis {{ time.to }}
          <span v-if="index < todaysBusinessHours.openingHours.length - 1">
            und
          </span>
        </span>
      </div>

      <svg
        aria-hidden="true"
        class="icon icon--after"
      >
        <use xlink:href="#icon-chevron-down"></use>
      </svg>
    </button>
    <div
      class="m-business-hours-toggle__content"
      :class="collapsedClass"
    >
      <ul class="ml-0">
        <li
          v-for="day in businessHours"
          :key="day.weekDay"
          :class="highlightBusinessDay(day)"
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
import { computed, ref } from "vue";

import { BusinessHourType } from "./BusinessHourType";

const LOCALES = "de-DE";

// Buisness
const props = withDefaults(
  defineProps<{
    businessHours: BusinessHourType[];
    toggleable?: boolean;
  }>(),
  {
    toggleable: false,
  }
);

let collapsed = ref(props.toggleable);

defineSlots<{
  hint(): any;
}>();

const toggleCollapsable = () => {
  collapsed.value = !collapsed.value;
};

const collapsedClass = computed(() => {
  return collapsed.value ? "collapse" : "";
});

const todaysDayShortName = computed(() => {
  const today = new Date();
  return today.toLocaleDateString(LOCALES, { weekday: "short" });
});

const highlightBusinessDay = (businessHour: BusinessHourType) => {
  if (businessHour.openingHours.length === 0) return "is-closed";
  if (businessHour.weekDay === todaysDayShortName.value) return "is-open";
};

const todaysBusinessHours = computed(() => {
  return props.businessHours.find((curr) => {
    return curr.weekDay === todaysDayShortName.value;
  });
});
</script>

<style scoped></style>
