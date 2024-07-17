import { InjectionKey, Ref } from "vue";

export const RadioButtonGroupKey: InjectionKey<{
  set: (value: RadioButtonValueTypes) => void;
  modelValue: Readonly<Ref<RadioButtonValueTypes>>;
  disabled: Readonly<Ref<boolean>>;
}> = Symbol("mucRadioGroup");

export type RadioButtonValueTypes = string | number;
