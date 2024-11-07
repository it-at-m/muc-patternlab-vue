import { RadioButtonValueTypes } from './MucRadioButtonTypes';
declare let __VLS_typeProps: {
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
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: RadioButtonValueTypes) => any;
    "update:modelValue": (modelValue: RadioButtonValueTypes) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((value: RadioButtonValueTypes) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: RadioButtonValueTypes) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
