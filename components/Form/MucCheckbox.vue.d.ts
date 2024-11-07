declare let __VLS_typeProps: {
    /**
     * Label is displayed to the right of the checkbox as information for the user.
     */
    label: string;
};
type __VLS_PublicProps = {
    modelValue?: boolean;
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean) => any;
} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClick?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
