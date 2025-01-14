type __VLS_Props = {
    /**
     * current viewDate for the selection
     */
    viewDate: Date;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    clicked: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClicked?: ((date: Date) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
