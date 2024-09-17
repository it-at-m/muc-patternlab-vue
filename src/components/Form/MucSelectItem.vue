<template>
  <span>
    {{ itemText }}
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ItemAsObject } from "./MucSelectTypes";

const props = defineProps<{
  item: MucSelectItemTypes;
  itemLabel: string;
}>();

/**
 * Defines the displayed value
 */
const itemText = computed(() =>
  typeof props.item === "string"
    ? props.item
    : props.item[props.itemLabel].toString()
);
</script>
