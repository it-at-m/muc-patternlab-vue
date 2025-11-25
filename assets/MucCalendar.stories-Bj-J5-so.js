import{M as d}from"./MucCalendar-DP6QGCjM.js";import"./iframe-Caa849X8.js";import"./preload-helper-PPVm8Dsz.js";import"./MucButton-BSCz6fT6.js";import"./MucIcon-BMnsjBgR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w={component:d,title:"MucCalendar",tags:["autodocs"],parameters:{docs:{description:{component:"The `muc-calendar` component is a non calendar component. It can be used to display calendar months or be used ás fancy date selection. Multiple variants in the date selection are offered. Quick date adjustments (months or years) can be done via clicking the month or year in the header."}}}},e={argTypes:{viewMonth:{control:"date"},min:{control:"date"},max:{control:"date"}},args:{variant:"single",showAdjacentMonths:!0}},a={argTypes:e.argTypes,args:{variant:"multiple",viewMonth:new Date(2023,0,1)}},n={argTypes:e.argTypes,args:{variant:"range",showAdjacentMonths:!0}},r={argTypes:e.argTypes,args:{disabled:!0,showAdjacentMonths:!0,modelValue:new Date}},t={argTypes:e.argTypes,args:{noAnimation:!0,allowedDates:c=>c.getDay()==new Date().getDay()}},s={argTypes:e.argTypes,args:{disabled:!0,showAdjacentMonths:!0,viewMonth:new Date(1970,0,1)}},o={argTypes:e.argTypes,args:{variant:"single",showAdjacentMonths:!0,disableViewChange:!0}},i={argTypes:e.argTypes,args:{variant:"single",viewMonth:new Date(2025,0,1),min:new Date(2025,0,5),max:new Date(2027,2,12)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  argTypes: {
    viewMonth: {
      control: "date"
    },
    min: {
      control: "date"
    },
    max: {
      control: "date"
    }
  },
  args: {
    variant: "single",
    showAdjacentMonths: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "multiple",
    viewMonth: new Date(2023, 0, 1)
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "range",
    showAdjacentMonths: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    disabled: true,
    showAdjacentMonths: true,
    modelValue: new Date()
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    noAnimation: true,
    allowedDates: (date: Date) => {
      return date.getDay() == new Date().getDay();
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    disabled: true,
    showAdjacentMonths: true,
    viewMonth: new Date(1970, 0, 1)
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "single",
    showAdjacentMonths: true,
    disableViewChange: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "single",
    viewMonth: new Date(2025, 0, 1),
    min: new Date(2025, 0, 5),
    max: new Date(2027, 2, 12)
  }
}`,...i.parameters?.docs?.source}}};const y=["Single","MultipleWithSelectedViewMonth","Range","DisabledWithPreSelectedDate","AllowedDatesWithNoAnimation","DisabledPreSelectedViewMonth","DisableViewChange","MinAndMax"];export{t as AllowedDatesWithNoAnimation,o as DisableViewChange,s as DisabledPreSelectedViewMonth,r as DisabledWithPreSelectedDate,i as MinAndMax,a as MultipleWithSelectedViewMonth,n as Range,e as Single,y as __namedExportsOrder,w as default};
