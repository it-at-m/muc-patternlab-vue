import { AllowedDateFunction, CalendarTypes, MucCalendarSelected } from './MucCalendarType';
type __VLS_Props = {
    /**
     * Initial date to be displayed on the selection screen
     */
    viewMonth?: Date;
    /**
     * Select if adjacent (before and after) month should be shown in the selection of the day. Defaults to false
     */
    showAdjacentMonths?: boolean;
    /**
     * Select the selection type for the user - single, multiple or range. Defaults to single
     */
    variant?: CalendarTypes;
    /**
     * Disable the selection of dates by the user. Defaults to false
     */
    disabled?: boolean;
    /**
     * Disables the animation
     */
    noAnimation?: boolean;
    /**
     * Function to determine if a date should be disabled or not
     */
    allowedDates?: AllowedDateFunction;
};
type __VLS_PublicProps = {
    "modelValue"?: MucCalendarSelected;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: MucCalendarSelected) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: MucCalendarSelected) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
