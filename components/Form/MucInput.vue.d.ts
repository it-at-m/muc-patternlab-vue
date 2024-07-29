/**
 * Type includes all possible input types possible.
 */
type inputType = "text" | "password" | "color" | "search" | "date" | "datetime-local";
declare function __VLS_template(): Readonly<{
    /**
     * Slot in front of the user input with divider.
     */
    prefix(): any;
}> & {
    /**
     * Slot in front of the user input with divider.
     */
    prefix(): any;
};
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    type: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<inputType>;
        default: string;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    datalist: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string[]>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    hint: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    errorMsg: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    suffixIcon: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    suffixClick: () => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    type: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<inputType>;
        default: string;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    datalist: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string[]>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    hint: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    errorMsg: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    suffixIcon: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}>> & {
    onSuffixClick?: (() => any) | undefined;
}, {
    type: inputType;
    required: boolean;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
