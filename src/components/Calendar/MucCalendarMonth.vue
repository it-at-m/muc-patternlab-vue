<template>
  <div class="muc-calendar-container">
    <div
      v-for="date in computedMonths"
      :class="{
        'muc-calendar-current-item':
          new Date().getMonth() === date.getMonth() &&
          new Date().getFullYear() === date.getFullYear(),
      }"
      class="muc-calendar-item"
      @click="clickedMonth(date)"
    >
      {{ monthDisplayment(date) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const MONTH_NOTATION = "short";

// TODO make external configuration for all components
const LOCALES = "de-DE";

const props = defineProps<{
  viewDate: Date;
}>();

const emit = defineEmits<{
  clicked: [date: Date];
}>();

const computedMonths = computed(() =>
  Array.from(
    { length: 12 },
    (_, i) => new Date(props.viewDate.getFullYear(), i)
  )
);

const monthDisplayment = (date: Date) =>
  date.toLocaleDateString(LOCALES, { month: MONTH_NOTATION });

const clickedMonth = (date: Date) => emit("clicked", date);
</script>

<style scoped>
.muc-calendar-item {
  padding: 37px;
}
</style>
