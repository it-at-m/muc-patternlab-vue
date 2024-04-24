<template>
  <div>
    <muc-button>Primary</muc-button>
    <muc-button variant="secondary">Secondary</muc-button>
    <muc-button variant="ghost">Ghost</muc-button>
    <muc-button disabled>Disabled</muc-button>
    <muc-button icon="arrow-right">With Icon</muc-button>
  </div>
</template>

<style scoped>
div * {
  margin-bottom: 8px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
}
</style>
