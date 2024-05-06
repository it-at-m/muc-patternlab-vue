type buttonType = "primary" | "secondary" | "ghost";
declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The variant prop gives you easy access to several different button styles.
     *
     * Available are `primary`, `secondary` and `ghost`.
     */
    variant?: buttonType | undefined;
    /**
     * Let`s you indicate that the button is not currently interactive or clickable.
     */
    disabled?: boolean | undefined;
    /**
     * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
     */
    icon?: string | undefined;
}>, {
    variant: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: () => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The variant prop gives you easy access to several different button styles.
     *
     * Available are `primary`, `secondary` and `ghost`.
     */
    variant?: buttonType | undefined;
    /**
     * Let`s you indicate that the button is not currently interactive or clickable.
     */
    disabled?: boolean | undefined;
    /**
     * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
     */
    icon?: string | undefined;
}>, {
    variant: string;
    disabled: boolean;
}>>> & {
    onClick?: (() => any) | undefined;
}, {
    variant: buttonType;
    disabled: boolean;
}, {}>, Readonly<{
    /**
     * Display content inside the button.
     */
    default(): any;
}> & {
    /**
     * Display content inside the button.
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
