<template>
  <div class="m-toggle">
    <input
      v-model="modelValue"
      class="m-toggle__input"
      type="checkbox"
      role="switch"
      :disabled="disabled"
      aria-label="Toggle"
    />
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<boolean>({ default: false });

const { disabled = false } = defineProps<{
  disabled?: boolean;
}>();
</script>
