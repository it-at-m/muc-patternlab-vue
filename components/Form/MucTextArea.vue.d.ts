type __VLS_Props = {
    /**
     * Unique identifier for the textarea. Required property used  to associate the textarea with its label and hint text for accessibility.
     */
    id: string;
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
    /**
     * Restricts character input to the specified number
     */
    maxlength?: number;
};
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
