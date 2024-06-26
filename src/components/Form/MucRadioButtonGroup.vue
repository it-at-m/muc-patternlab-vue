<template>
  <div class="m-form-group">
    <fieldset class="m-radio-group">
      <legend class="m-radio-group__legend">
        <h3 class="m-radio-group__heading">
          {{ heading }}
        </h3>
      </legend>
      <div class="m-radios">
        <slot />
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
const selctedButton = defineModel<string>("modelValue");
defineProps<{
  heading?: string;
}>();
</script>
