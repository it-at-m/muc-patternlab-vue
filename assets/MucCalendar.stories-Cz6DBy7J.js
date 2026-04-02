import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./MucCalendar-IVXnRSKp.js";var r,i,a,o,s,c,l,u,d,f;e((()=>{t(),r={component:n,title:`MucCalendar`,tags:[`autodocs`],parameters:{docs:{description:{component:"The `muc-calendar` component is a non calendar component. It can be used to display calendar months or be used ás fancy date selection. Multiple variants in the date selection are offered. Quick date adjustments (months or years) can be done via clicking the month or year in the header."}}}},i={argTypes:{viewMonth:{control:`date`},min:{control:`date`},max:{control:`date`}},args:{variant:`single`,showAdjacentMonths:!0}},a={argTypes:i.argTypes,args:{variant:`multiple`,viewMonth:new Date(2023,0,1)}},o={argTypes:i.argTypes,args:{variant:`range`,showAdjacentMonths:!0}},s={argTypes:i.argTypes,args:{disabled:!0,showAdjacentMonths:!0,modelValue:new Date}},c={argTypes:i.argTypes,args:{noAnimation:!0,allowedDates:e=>e.getDay()==new Date().getDay()}},l={argTypes:i.argTypes,args:{disabled:!0,showAdjacentMonths:!0,viewMonth:new Date(1970,0,1)}},u={argTypes:i.argTypes,args:{variant:`single`,showAdjacentMonths:!0,disableViewChange:!0}},d={argTypes:i.argTypes,args:{variant:`single`,viewMonth:new Date(2025,0,1),min:new Date(2025,0,5),max:new Date(2027,2,12)}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "multiple",
    viewMonth: new Date(2023, 0, 1)
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "range",
    showAdjacentMonths: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    disabled: true,
    showAdjacentMonths: true,
    modelValue: new Date()
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    noAnimation: true,
    allowedDates: (date: Date) => {
      return date.getDay() == new Date().getDay();
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    disabled: true,
    showAdjacentMonths: true,
    viewMonth: new Date(1970, 0, 1)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "single",
    showAdjacentMonths: true,
    disableViewChange: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "single",
    viewMonth: new Date(2025, 0, 1),
    min: new Date(2025, 0, 5),
    max: new Date(2027, 2, 12)
  }
}`,...d.parameters?.docs?.source}}},f=[`Single`,`MultipleWithSelectedViewMonth`,`Range`,`DisabledWithPreSelectedDate`,`AllowedDatesWithNoAnimation`,`DisabledPreSelectedViewMonth`,`DisableViewChange`,`MinAndMax`]}))();export{c as AllowedDatesWithNoAnimation,u as DisableViewChange,l as DisabledPreSelectedViewMonth,s as DisabledWithPreSelectedDate,d as MinAndMax,a as MultipleWithSelectedViewMonth,o as Range,i as Single,f as __namedExportsOrder,r as default};