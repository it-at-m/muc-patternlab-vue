type __VLS_Props = {
    /**
     * Title the card displays at the top
     */
    title: string;
    /**
     * Optional tagline the card displays above the title
     */
    tagline?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * Icon shown above the callout. Defaults to icons matching the type.
         */
        headerPrefix(): unknown;
        /**
         * Content beneath the heading shown as text.
         */
        content(): unknown;
    }> & {
        /**
         * Icon shown above the callout. Defaults to icons matching the type.
         */
        headerPrefix(): unknown;
        /**
         * Content beneath the heading shown as text.
         */
        content(): unknown;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (click: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((click: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
