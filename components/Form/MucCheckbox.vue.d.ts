type __VLS_Props = {
    /**
     *  Unique identifier for the checkbox. Required property used to associate the checkbox with its label and hint text for accessibility.
     */
    id: string;
    /**
     * Label is displayed to the right of the checkbox as information for the user. Ignored when the `label` slot is set.
     */
    label?: string;
    /**
     * Optional hint shown beneath the checkbox
     */
    hint?: string;
    /**
     * Name of the input. Defaults to "checkbox".
     */
    name?: string;
    /**
     * Sets aria-required on the input.
     */
    required?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: boolean;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClick?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    required: boolean;
    name: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
