import { CalendarTypes } from './MucCalendarType';
declare const _default: import('vue').DefineComponent<{
    /**
     * Current year and month in the view
     */
    viewDate: Date;
    /**
     * Type of possible day selection - single, multiple or range
     */
    variant: CalendarTypes;
    /**
     * Determines if selection of day should be disabled
     */
    disabled: boolean;
    /**
     * Determines if days of adjacent months (before and after) should be shown or not
     */
    showAdjacentMonths: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    clicked: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<{
    /**
     * Current year and month in the view
     */
    viewDate: Date;
    /**
     * Type of possible day selection - single, multiple or range
     */
    variant: CalendarTypes;
    /**
     * Determines if selection of day should be disabled
     */
    disabled: boolean;
    /**
     * Determines if days of adjacent months (before and after) should be shown or not
     */
    showAdjacentMonths: boolean;
}> & Readonly<{
    onClicked?: ((date: Date) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
