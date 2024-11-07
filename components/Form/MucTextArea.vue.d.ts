declare let __VLS_typeProps: {
    /**
     * Displays error message and highlights the input form with a red border.
     */
    errorMsg?: string;
    /**
     * Number of rows displayed of the textarea. Default is three.
     */
    rows?: number;
    /**
     * Placeholder for empty input form.
     */
    placeholder?: string;
    /**
     * Displays a label above the form component.
     */
    label?: string;
    /**
     * Displays a hint beneath the form component.
     */
    hint?: string;
    /**
     * Sets this input form as required. Default is false.
     */
    required?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: string;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
}>, {
    required: boolean;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
