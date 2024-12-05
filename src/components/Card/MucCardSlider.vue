<template>
    <div class="m-component m-component-slider-comment">
      <div class="container">
        <div class="m-component__grid">
          <div class="m-component__column">
            <section class="m-slider m-slider--visible-preview" aria-label="Slider mit Kommentaren" data-m-slider-splide="m-slider-comment">
              <p class="visually-hidden">This is a carousel with rotating cards. Use the previous and next buttons to
                navigate, and Enter to activate cards.</p>

              <!-- Previous button -->
              <button class="previous-button is-control">
                <svg class="icon">
                  <use xlink:href="#icon-arrow-left"></use>
                </svg>
                <span class="visually-hidden">Vorheriger Slide</span>
              </button>

              <!-- Slide content -->
              <div class="splide">
                <div class="splide__track">
                  <div class="splide__list">

                    <div class="splide__slide" role="group" aria-label="Kommentar 1 von 7">
                      <MucCard tagline="Dolor" title="Lorem Ipsum">
                        <template #content>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </template>
                      </MucCard>
                    </div>
                    <div class="splide__slide" role="group" aria-label="Kommentar 1 von 7">
                      <MucCard tagline="Dolor" title="Lorem Ipsum">
                        <template #content>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </template>
                      </MucCard>
                    </div>
                    <div class="splide__slide" role="group" aria-label="Kommentar 1 von 7">
                      <MucCard tagline="Dolor" title="Lorem Ipsum">
                        <template #content>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </template>
                      </MucCard>
                    </div>
                    <div class="splide__slide" role="group" aria-label="Kommentar 1 von 7">
                      <MucCard tagline="Dolor" title="Lorem Ipsum">
                        <template #content>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </template>
                      </MucCard>
                    </div>
                    <div class="splide__slide" role="group" aria-label="Kommentar 1 von 7">
                      <MucCard tagline="Dolor" title="Lorem Ipsum">
                        <template #content>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </template>
                      </MucCard>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Next button -->
              <button class="next-button is-control">
                <svg class="icon">
                  <use xlink:href="#icon-arrow-right"></use>
                </svg>
                <span class="visually-hidden">Nächster Slide</span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import MucCard from "./MucCard.vue";

defineSlots<{
  /**
   * MucCards can be put into this slot.
   */
  default(): any;
}>();
</script>

<style scoped></style>
