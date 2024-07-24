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
          v-for="(error, index) in errors"
          :key="index"
        >
          <a>{{ error }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  errors: string[];
}>();
</script>
