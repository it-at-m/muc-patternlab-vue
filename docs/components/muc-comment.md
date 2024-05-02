<script setup>
import Basic from './demo/MucComment/BasicExample.vue'
</script>

# muc-banner

The muc-comment component can be used to display a comment in e.g. a chat.
If you would like to display only text, we suggest using the more specific `muc-comment-text`. 
For more general integration, we recommend the more general `muc-comment`.

## Example Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/MucComment/BasicExample.vue

## Reference
[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-comment)

### Properties

| Name    | Type        | Default | Description                                                               |
|---------|-------------|---------|---------------------------------------------------------------------------|
| rating  | number (float)     |         | Number of stars to be displayed.                                          |
| variant | CommentType | `listing` | Choose the variant of the comment. This can be either `slider` oder `listing` |

### Slots
| Name           | Parameters | Description                                           |
| -------------- | ---------- |-------------------------------------------------------|
| initials       |            | Placeholder for the commenter's initials or avatar.   |
| author         |            | Placeholder for the author's name or username.        |
| datePrefix     |            | Prefix for the date (e.g., "am").                     |
| date           |            | Placeholder for the comment's date.                   |
| headline       |            | Placeholder for the comment's headline or title.      |
| text           |            | Placeholder for the main text content of the comment. |
