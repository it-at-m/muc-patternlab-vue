declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Icon slots overrides chosen prop icon.
         * The icon can be displayed infront or behind the label with these classes: icon--after | icon--before
         */
        icon(): void;
    }> & {
        /**
         * Icon slots overrides chosen prop icon.
         * The icon can be displayed infront or behind the label with these classes: icon--after | icon--before
         */
        icon(): void;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    /**
     * Text shown as the link
     */
    label: string;
    /**
     * href to link to
     */
    href?: string;
    /**
     * Optional icon displayed behind the text
     */
    icon?: string;
    /**
     * Target on the link
     */
    target?: string;
    /**
     * Removes the underline from the label text
     */
    noUnderline?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    /**
     * Text shown as the link
     */
    label: string;
    /**
     * href to link to
     */
    href?: string;
    /**
     * Optional icon displayed behind the text
     */
    icon?: string;
    /**
     * Target on the link
     */
    target?: string;
    /**
     * Removes the underline from the label text
     */
    noUnderline?: boolean;
}> & Readonly<{}>, {
    href: string;
    target: string;
    noUnderline: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
