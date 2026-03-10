import{M as p}from"./MucButton-BOlmf0hk.js";import{_ as t}from"./MucCallout-B7Yw1WsL.js";import"./iframe-Cuw0evxA.js";import"./preload-helper-PPVm8Dsz.js";import"./MucIcon-DKlnivov.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M={component:t,title:"MucCallout",tags:["autodocs"],parameters:{docs:{description:{component:"The `muc-callout` component is used to convey important information to the user through the use of contextual types, icons, and colors. The text within the content slot can be structured using paragraphs and bullet points. Plain text must be enclosed in a `<p>` tag.\n\n[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-callout)\n"}}}},e=()=>({components:{MucCallout:t},template:`
      <MucCallout
          type="info"
      >
        <template #header>
          Information
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `}),n=()=>({components:{MucCallout:t},template:`
      <MucCallout
          type="success"
      >
        <template #header>
          Success
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `}),o=()=>({components:{MucCallout:t},template:`
      <MucCallout
          type="warning"
      >
        <template #header>
          Warning
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `}),a=()=>({components:{MucCallout:t},template:`
      <MucCallout
          type="error"
      >
        <template #header>
          Error
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `}),r=()=>({components:{MucCallout:t,MucButton:p},template:`
      <MucCallout
          type="info"
      >
        <template #header>
         Button
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </template>
        <template #buttons>
          <muc-button icon="arrow-right" icon-animated> Button</muc-button>
        </template>
      </MucCallout>
    `}),l=()=>({components:{MucCallout:t},template:`
      <MucCallout
          type="info"
      >
        <template #header>
          Information
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCallout
  },
  template: \`
      <MucCallout
          type="info"
      >
        <template #header>
          Information
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    \`
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCallout
  },
  template: \`
      <MucCallout
          type="success"
      >
        <template #header>
          Success
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    \`
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCallout
  },
  template: \`
      <MucCallout
          type="warning"
      >
        <template #header>
          Warning
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    \`
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCallout
  },
  template: \`
      <MucCallout
          type="error"
      >
        <template #header>
          Error
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    \`
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCallout,
    MucButton
  },
  template: \`
      <MucCallout
          type="info"
      >
        <template #header>
         Button
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </template>
        <template #buttons>
          <muc-button icon="arrow-right" icon-animated> Button</muc-button>
        </template>
      </MucCallout>
    \`
})`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => ({
  components: {
    MucCallout
  },
  template: \`
      <MucCallout
          type="info"
      >
        <template #header>
          Information
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
        </template>
      </MucCallout>
    \`
})`,...l.parameters?.docs?.source}}};const C=["Default","Success","Warning","Error","WithButton","WithMultiplePTags"];export{e as Default,a as Error,n as Success,o as Warning,r as WithButton,l as WithMultiplePTags,C as __namedExportsOrder,M as default};
