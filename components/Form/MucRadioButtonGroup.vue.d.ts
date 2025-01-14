import { RadioButtonValueTypes } from './MucRadioButtonTypes';
type __VLS_Props = {
    /**
     * Optional heading above all radiobuttons as a group heading
     */
    heading?: string;
    /**
     * Optionally disable all child radiobuttons - defaults to 'false'
     */
    disabled?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: RadioButtonValueTypes;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: RadioButtonValueTypes) => any;
    "update:modelValue": (value: RadioButtonValueTypes) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((value: RadioButtonValueTypes) => any) | undefined;
    "onUpdate:modelValue"?: ((value: RadioButtonValueTypes) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
