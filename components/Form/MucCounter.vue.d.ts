declare let __VLS_typeProps: {
    /**
     * Label shown after the counter
     */
    label: string;
    /**
     * Optional minimum of counter
     */
    min?: number;
    /**
     * Optional maximum of counter
     */
    max?: number;
    /**
     * Optional link for label
     */
    link?: string;
    /**
     * Optionally disables the counter buttons
     */
    disabled?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: number;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
