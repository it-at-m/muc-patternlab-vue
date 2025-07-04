type __VLS_Props = {
    /**
     * Text shown as the link
     */
    label: string;
    /**
     * href to link to
     */
    href?: string;
    /**
     * Optional icon displayed before the text
     */
    prependIcon?: string;
    /**
     * Optional icon displayed behind the text
     */
    appendIcon?: string;
    /**
     * Target on the link
     */
    target?: string;
    /**
     * Removes the underline from the label text
     */
    noUnderline?: boolean;
    /**
     * Disables the link
     */
    disabled?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * This slot allows you to inject custom content before the link label.
         */
        prepend(): void;
        /**
         * This slot allows you to inject custom content behind the link label.
         */
        append(): void;
    }> & {
        /**
         * This slot allows you to inject custom content before the link label.
         */
        prepend(): void;
        /**
         * This slot allows you to inject custom content behind the link label.
         */
        append(): void;
    };
    refs: {};
    rootEl: HTMLAnchorElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLAnchorElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
