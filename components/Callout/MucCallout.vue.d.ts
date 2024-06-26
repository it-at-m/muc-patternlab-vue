type calloutType = "info" | "warning" | "success" | "error";
declare function __VLS_template(): Readonly<{
    /**
     * Icon shown above the callout. Defaults to icons matching the type.
     */
    icon(): any;
    /**
     * Heading of the callout.
     */
    header(): any;
    /**
     * Content beneath the heading shown as text.
     */
    content(): any;
}> & {
    /**
     * Icon shown above the callout. Defaults to icons matching the type.
     */
    icon(): any;
    /**
     * Heading of the callout.
     */
    header(): any;
    /**
     * Content beneath the heading shown as text.
     */
    content(): any;
};
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * Type of the callout, default is `info`.
     *
     * Available are `info`, `warning`, `success` and `error`.
     */
    type?: calloutType;
}>, {
    type: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * Type of the callout, default is `info`.
     *
     * Available are `info`, `warning`, `success` and `error`.
     */
    type?: calloutType;
}>, {
    type: string;
}>>>, {
    type: calloutType;
}, {}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
