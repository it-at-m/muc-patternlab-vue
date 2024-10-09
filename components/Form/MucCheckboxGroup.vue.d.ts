declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Slot directly beneath the heading which will be displayed at all times.
         */
        checkboxes(): any;
        /**
         * Slot beneath the regular checkbox slot which will be collapsed at first.
         */
        collapsableCheckboxes(): any;
    }> & {
        /**
         * Slot directly beneath the heading which will be displayed at all times.
         */
        checkboxes(): any;
        /**
         * Slot beneath the regular checkbox slot which will be collapsed at first.
         */
        collapsableCheckboxes(): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    /**
     * Display a heading above the slots.
     */
    heading?: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    /**
     * Display a heading above the slots.
     */
    heading?: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
