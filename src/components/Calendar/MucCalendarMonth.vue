<template>
  <div class="container">
    <div
      v-for="date in computedMonths"
      :class="{
        current:
          new Date().getMonth() === date.getMonth() &&
          new Date().getFullYear() === date.getFullYear(),
      }"
      class="item"
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
.item {
  display: grid;
  align-items: center;
  justify-items: center;
  border: 1px solid white;
  transition: border-color 0.3s ease-in;
}
.item:hover {
  border: 1px solid var(--color-neutrals-blue);
  transition: border-color 0.1s ease-out;
  cursor: pointer;
}
.container {
  display: grid;
  height: 302px;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  justify-self: center;
  gap: 2px 2px;
  padding: 5px;
}

.current {
  background: var(--color-neutrals-blue);
}
</style>
