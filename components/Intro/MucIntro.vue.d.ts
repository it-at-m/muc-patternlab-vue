declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * Title of the Intro
     */
    title: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * Title of the Intro
     */
    title: string;
}>>>, {}, {}>, Readonly<{
    /**
     * Text-content of the Intro.
     */
    default(): any;
}> & {
    /**
     * Text-content of the Intro.
     */
    default(): any;
}>;
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
