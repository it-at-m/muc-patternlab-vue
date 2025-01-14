import { CalendarTypes } from './MucCalendarType';
type __VLS_Props = {
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
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    clicked: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClicked?: ((date: Date) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
