import { InjectionKey, Ref } from "vue";

/**
 * Key for inject and provide
 *
 * @type {InjectionKey<RadioButtonGroupInjection>}
 */
export const RadioButtonGroupKey: InjectionKey<RadioButtonGroupInjection> =
  Symbol("mucRadioGroup");

/**
 * Type getting injected / provided
 */
export interface RadioButtonGroupInjection {
  /**
   * Function for setting the value of the current selected radiobutton
   * @param {RadioButtonValueTypes} value - Value being set as the new current selected radiobutton
   */
  set: (value: RadioButtonValueTypes) => void;

  /**
   * Current value of the currently selected radiobutton
   */
  modelValue: Readonly<Ref<RadioButtonValueTypes | undefined>>;

  /**
   * Deactivate all child radiobuttons
   */
  disabled: Readonly<Ref<boolean>>;
}

/**
 * Different possible types used as value for a radiobutton-values
 */
export type RadioButtonValueTypes =
  | boolean
  | string
  | unknown[]
  | Record<string, unknown>
  | number
  | null;
