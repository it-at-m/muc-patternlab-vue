import { BusinessHourType } from './BusinessHourType';
declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Display a hint beneath all the opening hours.
         */
        hint(): any;
    }> & {
        /**
         * Display a hint beneath all the opening hours.
         */
        hint(): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
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
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
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
}> & Readonly<{}>, {
    icon: string;
    toggleable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
