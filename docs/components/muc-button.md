<script setup>
import Basic from './demo/MucButton/Basic.vue'
</script>

# muc-button

The `muc-button` component replaces the standard html button with a material design theme using the style from patternlab.

## Example Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/MucButton/Basic.vue

## Reference

### Properties

| Name     | Type    | Default | Description                                                                                                                  |
|----------|---------|---------|------------------------------------------------------------------------------------------------------------------------------|
| variant  | string  | primary | The variant prop gives you easy access to several different button styles. Available are `primary`, `secondary` and `ghost`. |
| disabled | boolean | false   | Let`s you indicate that the button is not currently interactive or clickable.                                                |

### Events

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
|      |            |             |

### Slots

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
|      |            |             |
