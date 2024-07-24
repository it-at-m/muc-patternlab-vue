<template>
  <div
    class="m-error-list"
    role="alert"
    tabindex="-1"
  >
    <h2 class="m-error-list__title">
      {{ title }}
    </h2>
    <div class="m-error-list__body">
      <ul class="m-list m-error-list__list">
        <li
          v-for="(error, index) in listOfErrors"
          :key="index"
        >
          <a>{{ error }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title?: string;
  errors: string | string[];
}>();

const listOfErrors = computed(() =>
  typeof props.errors === "string" ? [props.errors] : props.errors
);
</script>
