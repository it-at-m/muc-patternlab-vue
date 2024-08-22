declare function __VLS_template(): Readonly<{
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
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
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
}>, {
    noUnderline: boolean;
    href: string;
    target: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
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
}>, {
    noUnderline: boolean;
    href: string;
    target: string;
}>>>, {
    href: string;
    target: string;
    noUnderline: boolean;
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
