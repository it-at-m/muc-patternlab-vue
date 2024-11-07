declare const _default: import('vue').DefineComponent<{
    /**
     * Date of for this tile to be displayed
     */
    date: Date;
    /**
     * Determines if this date should be shown or not, depending on the month - defaults to false
     */
    showAdjacentMonths?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<{
    /**
     * Date of for this tile to be displayed
     */
    date: Date;
    /**
     * Determines if this date should be shown or not, depending on the month - defaults to false
     */
    showAdjacentMonths?: boolean;
}> & Readonly<{
    onClick?: ((date: Date) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
