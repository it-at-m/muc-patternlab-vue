type __VLS_Props = {
    /**
     *  Unique identifier for the radiobutton. Required property used to associate the radiobutton with its label and hint text for accessibility.
     */
    id: string;
    /**
     * value for this radiobutton
     */
    value: string;
    /**
     * Optional label shown behind the radiobutton
     */
    label?: string;
    /**
     * Optional hint shown beneath the radiobutton
     */
    hint?: string;
    /**
     * Optionally disable this specific radiobutton
     */
    disabled?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
