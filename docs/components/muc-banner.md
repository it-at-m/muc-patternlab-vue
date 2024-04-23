<script setup>
import BasicExample from './demo/MucBanner/BasicExample.vue'
</script>

# muc-banner

A banner-component used for single-line informations. Available in multiple types.  

<br>

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-bannerhttps://patternlab.muenchen.space/?p=viewall-elements-banner)

<br>

## Example Usage

<DemoContainer>
  <BasicExample/>
</DemoContainer>

<<< @/components/demo/MucBanner/BasicExample.vue

## Reference

### Properties

| Name | Type   | Default | Description                                                                            |
|------|--------|---------|----------------------------------------------------------------------------------------|
| type | string | `info`  | Changes the style of the banner. Available types are `info`, `warning` and `emergency` |

### Slots

| Name    | Parameters | Description                 |
|---------|------------|-----------------------------|
| default | -          | Text-content of the banner. |
