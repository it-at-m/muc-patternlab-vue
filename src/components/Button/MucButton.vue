<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    class="m-button m-button--animated-right"
    :class="buttonClass"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue"

type buttonType = "primary" | "secondary" | "ghost"

const props = withDefaults(
  defineProps<{
    variant?: buttonType
    disabled?: boolean
  }>(),
  {
    variant: "primary",
    disabled: false,
  }
)

const emit = defineEmits<{
  (e: "click"): void
}>()

const buttonClass = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "m-button--secondary"
    case "ghost":
      return "m-button--ghost"
    default:
      return "m-button--primary"
  }
})

const handleClick = () => {
  emit("click")
}
</script>

<style scoped>
/*
* Class below may look unused but is used dynamically! Do NOT remove them!!
* It adds padding to ghost button, which is missing in the patternlab!
*/
.m-button--ghost {
  padding-left: 14px;
}
</style>
