<script setup lang="ts">
import { MucIcon } from "../Icon";
</script>

<template>
  <span class="m-error-message form-error-message">
    <MucIcon icon="warning--filled" />
    <span>
      <slot></slot>
    </span>
  </span>
</template>

<style scoped>
.form-error-message {
  display: flex;
  align-items: flex-start;
}

.form-error-message .icon {
  margin-top: 0;
}

.form-error-message span {
  margin-left: 4px;
}
</style>
