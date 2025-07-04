import { BusinessHourType } from './BusinessHourType';
type __VLS_Props = {
    /**
     * This array includes all the opening hours for all days of the week.
     */
    businessHours: BusinessHourType[];
    /**
     * Lets you choose between the toggleable and fixed state of the component.
     * In the fixed state, no toggle button will be shown.
     */
    toggleable?: boolean;
    /**
     * Choose an icon for the toggle button. The default if none is given is the time icon.
     */
    icon?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * Display a hint beneath all the opening hours.
         */
        hint(): unknown;
    }> & {
        /**
         * Display a hint beneath all the opening hours.
         */
        hint(): unknown;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
