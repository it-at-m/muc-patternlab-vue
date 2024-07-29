declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * value for this radiobutton
     */
    value: string;
    /**
     * Optional label shown behind the radiobutton
     */
    label?: string;
    /**
     * Optional hint shown beneath the radiobutton
     */
    hint?: string;
    /**
     * Optionally disable this specific radiobutton
     */
    disabled?: boolean;
}>, {
    disabled: boolean;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * value for this radiobutton
     */
    value: string;
    /**
     * Optional label shown behind the radiobutton
     */
    label?: string;
    /**
     * Optional hint shown beneath the radiobutton
     */
    hint?: string;
    /**
     * Optionally disable this specific radiobutton
     */
    disabled?: boolean;
}>, {
    disabled: boolean;
}>>>, {
    disabled: boolean;
}, {}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
