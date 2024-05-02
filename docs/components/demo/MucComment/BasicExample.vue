<template>
  <div>
    <muc-comment :rating="5">
      <template v-slot:initials>TT</template>
      <template v-slot:author>Max Mustermann</template>
      <template v-slot:datePrefix>-</template>
      <template v-slot:date>01.01.1970</template>
      <template v-slot:headline>Lorem ipsum</template>
      <template v-slot:text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </template>
    </muc-comment>
    <muc-comment-text
      date="01.01.2024"
      author="Max Busch"
      headline="Lorem ipsum"
      :rating="2.3"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
      variant
      dot-divider
    />
  </div>
</template>

<style scoped></style>
<script setup lang="ts"></script>
