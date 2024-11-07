type calloutType = "info" | "warning" | "success" | "error";
declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Icon shown above the callout. Defaults to icons matching the type.
         */
        icon(): any;
        /**
         * Heading of the callout.
         */
        header(): any;
        /**
         * Content beneath the heading shown as text.
         */
        content(): any;
    }> & {
        /**
         * Icon shown above the callout. Defaults to icons matching the type.
         */
        icon(): any;
        /**
         * Heading of the callout.
         */
        header(): any;
        /**
         * Content beneath the heading shown as text.
         */
        content(): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    /**
     * Type of the callout, default is `info`.
     *
     * Available are `info`, `warning`, `success` and `error`.
     */
    type?: calloutType;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    /**
     * Type of the callout, default is `info`.
     *
     * Available are `info`, `warning`, `success` and `error`.
     */
    type?: calloutType;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
