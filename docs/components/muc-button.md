<script setup>
import Basic from './demo/MucButton/Basic.vue'
</script>

# muc-button


https://patternlab.muenchen.space/?p=viewall-elements-buttons

The `muc-button` component themes the standard html button using the style from patternlab.

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
| icon     | string  |         | Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.                             |

### Events

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
|      |            |             |

### Slots

| Name | Parameters | Description                        |
| ---- | ---------- |------------------------------------|
|      |            | Display content inside the button. |
