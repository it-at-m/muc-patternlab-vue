/**
 * Type includes all possible input types possible.
 */
type inputType = "text" | "password" | "color" | "search" | "date" | "datetime-local";
declare let __VLS_typeProps: {
    /**
     * Displays error message and highlights the input form with a red border.
     */
    errorMsg?: string;
    /**
     * Placeholder for empty input form.
     */
    placeholder?: string;
    /**
     * Sets this input form as required. Default is wrong.
     */
    required?: boolean;
    /**
     * Displays a label above the form component.
     */
    label?: string;
    /**
     * Displays a hint beneath the form component.
     */
    hint?: string;
    /**
     * Sets the type of this form component. This can be text, password, color, date or datetime-local.
     */
    type?: inputType;
    /**
     * Options for the form component. Type must set to 'search'.
     */
    datalist?: string[];
    /**
     * Icon to be displayed as a suffix at the end of the input.
     */
    suffixIcon?: string;
};
type __VLS_PublicProps = {
    modelValue?: string;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Slot in front of the user input with divider.
         */
        prefix(): any;
    }> & {
        /**
         * Slot in front of the user input with divider.
         */
        prefix(): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string) => any;
} & {
    suffixClick: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
    onSuffixClick?: (() => any) | undefined;
}>, {
    type: inputType;
    required: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
