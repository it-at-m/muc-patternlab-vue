type __VLS_Props = {
    /**
     * Optional label displayed to the left of the toggle switch.
     */
    labelLeft?: string;
    /**
     * Optional label displayed to the right of the toggle switch.
     * When set, the left label is highlighted while off and this one while on.
     */
    labelRight?: string;
    /**
     * Disables the toggle switch.
     */
    disabled?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
