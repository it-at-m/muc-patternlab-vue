declare function __VLS_template(): Readonly<{
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
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * Display a heading above the slots.
     */
    heading?: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * Display a heading above the slots.
     */
    heading?: string;
}>>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
