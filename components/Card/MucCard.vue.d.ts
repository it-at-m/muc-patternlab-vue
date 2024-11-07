declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Icon shown above the callout. Defaults to icons matching the type.
         */
        headerPrefix(): any;
        /**
         * Content beneath the heading shown as text.
         */
        content(): any;
    }> & {
        /**
         * Icon shown above the callout. Defaults to icons matching the type.
         */
        headerPrefix(): any;
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
     * Title the card displays at the top
     */
    title: string;
    /**
     * Optional tagline the card displays above the title
     */
    tagline?: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (click: Event) => any;
}, string, import('vue').PublicProps, Readonly<{
    /**
     * Title the card displays at the top
     */
    title: string;
    /**
     * Optional tagline the card displays above the title
     */
    tagline?: string;
}> & Readonly<{
    onClick?: ((click: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
