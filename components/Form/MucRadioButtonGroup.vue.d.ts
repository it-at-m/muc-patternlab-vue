import { RadioButtonValueTypes } from './MucRadioButtonTypes';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<RadioButtonValueTypes>;
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    heading: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    change: (value: RadioButtonValueTypes) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<RadioButtonValueTypes>;
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    heading: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}>> & {
    onChange?: ((value: RadioButtonValueTypes) => any) | undefined;
}, {
    disabled: boolean;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
