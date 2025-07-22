type __VLS_Props = {
    /**
     * Display a heading above the slots.
     */
    heading?: string;
    /**
     * Optional error message displayed below the group.
     */
    errorMsg?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * Slot directly beneath the heading which will be displayed at all times.
         */
        checkboxes: unknown;
        /**
         * Slot beneath the regular checkbox slot which will be collapsed at first.
         */
        collapsableCheckboxes: unknown;
    }> & {
        /**
         * Slot directly beneath the heading which will be displayed at all times.
         */
        checkboxes: unknown;
        /**
         * Slot beneath the regular checkbox slot which will be collapsed at first.
         */
        collapsableCheckboxes: unknown;
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
