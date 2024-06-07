import { BusinessHourType } from './BusinessHourType';

declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * This array includes all the opening hours for all days of the week.
     */
    businessHours: BusinessHourType[];
    /**
     * Lets you choose between the toggleable and fixed state of the component.
     * In the fixed state, no toggle button will be shown.
     */
    toggleable?: boolean | undefined;
    /**
     * Choose an icon for the toggle button. The default if none is given is the time icon.
     */
    icon?: string | undefined;
}>, {
    icon: string;
    toggleable: boolean;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * This array includes all the opening hours for all days of the week.
     */
    businessHours: BusinessHourType[];
    /**
     * Lets you choose between the toggleable and fixed state of the component.
     * In the fixed state, no toggle button will be shown.
     */
    toggleable?: boolean | undefined;
    /**
     * Choose an icon for the toggle button. The default if none is given is the time icon.
     */
    icon?: string | undefined;
}>, {
    icon: string;
    toggleable: boolean;
}>>>, {
    icon: string;
    toggleable: boolean;
}, {}>, Readonly<{
    /**
     * Display a hint beneath all the opening hours.
     */
    hint(): any;
}> & {
    /**
     * Display a hint beneath all the opening hours.
     */
    hint(): any;
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
