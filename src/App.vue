<script setup lang="ts">
import sprites from "@/assets/temporary/muc-icons.svg?raw";

import MucButton from '@/components/Button/MucButton.vue';
import MucBanner from '@/components/Banner/MucBanner.vue';
import MucIntro from "@/components/Intro/MucIntro.vue";
</script>

<template>
  <div>
    <svg
        style="display: none;"
        v-html="sprites">
    </svg>

    <table>
      <tr>
        <th>MucButton</th>
        <td><muc-button>Test Me!</muc-button></td>
      </tr>
      <tr>
        <th>MucBanner info</th>
        <td>
          <muc-banner type="info">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <a href="#">Mehr erfahren</a>
          </muc-banner>
        </td>
      </tr>
      <tr>
        <th>MucBanner warning</th>
        <td>
          <muc-banner type="warning">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <a href="#">Mehr erfahren</a>
          </muc-banner>
        </td>
      </tr>
      <tr>
        <th>MucBanner emergency</th>
        <td>
          <muc-banner type="emergency">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <a href="#">Mehr erfahren</a>
          </muc-banner>
        </td>
      </tr>
      <tr>
        <th>MucIntro</th>
        <td>
          <muc-intro title="Testtitel">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <a href="#">Mehr erfahren</a>
          </muc-intro>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
@import "@/assets/temporary/muenchende-style.css";

table {
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
}

th, td {
  padding: 8px;
}
</style>
