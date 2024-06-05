<template>
  <div
    class="m-checkboxes__item"
    @click="clickedCheckbox"
  >
    <input
      class="m-checkboxes__input"
      name="checkbox"
      type="checkbox"
      value="checkbox-value-0"
    />
    <label
      class="m-label m-checkboxes__label"
      for="checkbox-example-"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
const checkBoxValue = defineModel({ default: false });

defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const clickedCheckbox = () => {
  checkBoxValue.value = !checkBoxValue.value;
  emit("click");
};
</script>

<style scoped></style>
