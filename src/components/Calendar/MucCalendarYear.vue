<template>
  <div class="muc-calendar-container">
    <div
      v-for="date in computedYears"
      class="muc-calendar-item"
      :class="{
        'muc-calendar-current-item':
          new Date().getFullYear() === date.getFullYear(),
      }"
      @click="clickedYear(date)"
    >
      {{ yearDisplayment(date) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const YEAR_NOTATION = "numeric";

// TODO make external configuration for all components
const LOCALES = "de-DE";

const props = defineProps<{
  viewDate: Date;
}>();

const emit = defineEmits<{
  clicked: [date: Date];
}>();

const computedYears = computed(() =>
  Array.from(
    { length: 12 },
    (_, i) =>
      new Date(
        props.viewDate.getFullYear() - (props.viewDate.getFullYear() % 10) + i,
        props.viewDate.getMonth()
      )
  )
);

const yearDisplayment = (date: Date) =>
  date.toLocaleDateString(LOCALES, { year: YEAR_NOTATION });

const clickedYear = (date: Date) => emit("clicked", date);
</script>

<style scoped>
.muc-calendar-item {
  padding: 37px;
}

.off-year {
  color: var(--color-neutrals-blue);
}
</style>
