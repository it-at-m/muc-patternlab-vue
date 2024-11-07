type bannerType = "info" | "success" | "warning" | "emergency";
declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Text-content of the banner.
         */
        default(): any;
    }> & {
        /**
         * Text-content of the banner.
         */
        default(): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    /**
     * Changes the style of the banner. Available types are `info`, `warning` and `emergency`.
     */
    type?: bannerType;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    /**
     * Changes the style of the banner. Available types are `info`, `warning` and `emergency`.
     */
    type?: bannerType;
}> & Readonly<{}>, {
    type: bannerType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
