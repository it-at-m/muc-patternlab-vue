import{M as k}from"./MucCalendar-CSeNPwuk.js";import"./iframe-DUKkxAAz.js";import"./MucButton-CHQWwwDE.js";import"./MucIcon-BAxoxAox.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={component:k,title:"MucCalendar",tags:["autodocs"],parameters:{docs:{description:{component:"The `muc-calendar` component is a non calendar component. It can be used to display calendar months or be used ás fancy date selection. Multiple variants in the date selection are offered. Quick date adjustments (months or years) can be done via clicking the month or year in the header."}}}},e={argTypes:{viewMonth:{control:"date"},min:{control:"date"},max:{control:"date"}},args:{variant:"single",showAdjacentMonths:!0}},a={argTypes:e.argTypes,args:{variant:"multiple",viewMonth:new Date(2023,0,1)}},n={argTypes:e.argTypes,args:{variant:"range",showAdjacentMonths:!0}},r={argTypes:e.argTypes,args:{disabled:!0,showAdjacentMonths:!0,modelValue:new Date}},t={argTypes:e.argTypes,args:{noAnimation:!0,allowedDates:_=>_.getDay()==new Date().getDay()}},s={argTypes:e.argTypes,args:{disabled:!0,showAdjacentMonths:!0,viewMonth:new Date(1970,0,1)}},o={argTypes:e.argTypes,args:{variant:"single",showAdjacentMonths:!0,disableViewChange:!0}},i={argTypes:e.argTypes,args:{variant:"single",viewMonth:new Date(2025,0,1),min:new Date(2025,0,5),max:new Date(2027,2,12)}};var c,d,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "multiple",
    viewMonth: new Date(2023, 0, 1)
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,w;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "range",
    showAdjacentMonths: true
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,M,D;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    disabled: true,
    showAdjacentMonths: true,
    modelValue: new Date()
  }
}`,...(D=(M=r.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var T,S,v;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    noAnimation: true,
    allowedDates: (date: Date) => {
      return date.getDay() == new Date().getDay();
    }
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var A,b,j;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    disabled: true,
    showAdjacentMonths: true,
    viewMonth: new Date(1970, 0, 1)
  }
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var V,x,C;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "single",
    showAdjacentMonths: true,
    disableViewChange: true
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var W,f,P;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: Single.argTypes,
  args: {
    variant: "single",
    viewMonth: new Date(2025, 0, 1),
    min: new Date(2025, 0, 5),
    max: new Date(2027, 2, 12)
  }
}`,...(P=(f=i.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const q=["Single","MultipleWithSelectedViewMonth","Range","DisabledWithPreSelectedDate","AllowedDatesWithNoAnimation","DisabledPreSelectedViewMonth","DisableViewChange","MinAndMax"];export{t as AllowedDatesWithNoAnimation,o as DisableViewChange,s as DisabledPreSelectedViewMonth,r as DisabledWithPreSelectedDate,i as MinAndMax,a as MultipleWithSelectedViewMonth,n as Range,e as Single,q as __namedExportsOrder,Q as default};
