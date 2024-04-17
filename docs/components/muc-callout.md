<script setup>
import Basic from './demo/MucCallout/Basic.vue'
</script>

# muc-callout

The muc-callout component is used to convey important information to the user through the use of contextual types, icons, and colors.

## Example Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/MucCallout/Basic.vue

## Reference

### Properties

| Name | Type                  | Default | Description         |
|------|-----------------------|---------|---------------------|
| type | calloutType as string | info    | Type of the callout |

### Slots

| Name    | Parameters | Description                                                        |
|---------| ---------- |--------------------------------------------------------------------|
| icon    |            | Icon shown above the callout. Defaults to Icons matching the type. |
| header  |            | Heading of the callout.                                            |
| content |            | Content beneath the Heading shown as text.                         |
