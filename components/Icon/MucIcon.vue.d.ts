declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * String of the icon to be displayed.
     */
    icon: string;
    /**
     * Optional css-color for the icon.
     */
    color?: string | undefined;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * String of the icon to be displayed.
     */
    icon: string;
    /**
     * Optional css-color for the icon.
     */
    color?: string | undefined;
}>>>, {}, {}>;
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
