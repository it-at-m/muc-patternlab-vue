<template>
  <span>
    {{ itemText }}
  </span>
</template>

<script setup lang="ts">

import {ItemAsObject} from "./MucSelect.vue";
import {computed} from "vue";

const props = defineProps<{item: string | ItemAsObject, variableWithText: string}>();

/**
 * Defines the displayed value
 */
const itemText = computed(() =>
    (typeof props.item === "string")
        ? props.item
        : props.item[props.variableWithText].toString()
);

</script>
