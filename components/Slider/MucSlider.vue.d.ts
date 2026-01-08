declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * MucSliderItems can be put into this slot.
         */
        default(): unknown;
    }> & {
        /**
         * MucSliderItems can be put into this slot.
         */
        default(): unknown;
    };
    refs: {
        splide: any;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    changeSlide: (index: number) => any;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onChangeSlide?: ((index: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    splide: any;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
