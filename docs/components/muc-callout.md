<script setup>
import Basic from './demo/MucCallout/BasicExample.vue'
</script>

# muc-callout


https://patternlab.muenchen.space/?p=viewall-components-callout

The muc-callout component is used to convey important information to the user through the use of contextual types, icons, and colors.

## Example Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/MucCallout/BasicExample.vue

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
