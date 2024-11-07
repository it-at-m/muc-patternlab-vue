import{M as V}from"./MucCalendar-BJs4Ku0E.js";import"./vue.esm-bundler-BeGYTx_4.js";import"./MucButton-DRlosKc8.js";import"./MucIcon-Da7jEBmO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={component:V,title:"MucCalendar",tags:["autodocs"],parameters:{docs:{description:{component:"The `muc-calendar` component is a non calendar component. It can be used to display calendar months or be used ás fancy date selection. Multiple variants in the date selection are offered. Quick date adjustments (months or years) can be done via clicking the month or year in the header."}}}},e={args:{variant:"single",showAdjacentMonths:!0}},a={args:{variant:"multiple",viewMonth:new Date(2023,0,1)}},t={args:{variant:"range",showAdjacentMonths:!0}},r={args:{disabled:!0,showAdjacentMonths:!0,modelValue:new Date}},n={args:{noAnimation:!0,allowedDates:y=>y.getDay()==new Date().getDay()}},s={args:{disabled:!0,showAdjacentMonths:!0,viewMonth:new Date(1970,0,1)}};var o,c,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "single",
    showAdjacentMonths: true
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "multiple",
    viewMonth: new Date(2023, 0, 1)
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "range",
    showAdjacentMonths: true
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,w,D;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    showAdjacentMonths: true,
    modelValue: new Date()
  }
}`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var M,A,S;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    noAnimation: true,
    allowedDates: (date: Date) => {
      return date.getDay() == new Date().getDay();
    }
  }
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var v,b,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    showAdjacentMonths: true,
    viewMonth: new Date(1970, 0, 1)
  }
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const x=["Single","MultipleWithSelectedViewMonth","Range","DisabledWithPreSelectedDate","AllowedDatesWithNoAnimation","DisabledPreSelectedViewMonth"];export{n as AllowedDatesWithNoAnimation,s as DisabledPreSelectedViewMonth,r as DisabledWithPreSelectedDate,a as MultipleWithSelectedViewMonth,t as Range,e as Single,x as __namedExportsOrder,k as default};
