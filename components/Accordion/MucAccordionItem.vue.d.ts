type __VLS_Props = {
    /**
     * Id of accordion item.
     */
    id: string;
    /**
     * Heading of accordion item.
     */
    header: string;
    /**
     * List of active accordion items.
     */
    activeItems?: string[];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * Formatted text can be put into this slot.
         */
        text(): unknown;
    }> & {
        /**
         * Formatted text can be put into this slot.
         */
        text(): unknown;
    };
    refs: {
        section: HTMLElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: (id: string) => any;
    close: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpen?: ((id: string) => any) | undefined;
    onClose?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    section: HTMLElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
