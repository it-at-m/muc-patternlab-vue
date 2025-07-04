type __VLS_Props = {
    /**
     *  Unique identifier for the checkbox. Required property used to associate the checkbox with its label and hint text for accessibility.
     */
    id: string;
    /**
     * Label is displayed to the right of the checkbox as information for the user.
     */
    label: string;
    /**
     * Optional hint shown beneath the checkbox
     */
    hint?: string;
};
type __VLS_PublicProps = {
    modelValue?: boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClick?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
