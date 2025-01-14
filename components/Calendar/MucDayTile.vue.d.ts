type __VLS_Props = {
    /**
     * Date of for this tile to be displayed
     */
    date: Date;
    /**
     * Determines if this date should be shown or not, depending on the month - defaults to false
     */
    showAdjacentMonths?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((date: Date) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
