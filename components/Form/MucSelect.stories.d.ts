declare const _default: {
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[]>;
        label: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        hint: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        items: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string[]>;
            required: true;
        };
        multiple: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[]>;
        label: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        hint: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        items: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string[]>;
            required: true;
        };
        multiple: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }>>, {
        multiple: boolean;
    }, {}>;
    title: string;
    tags: string[];
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        modelValue: string;
        items: string[];
        label: string;
        hint: string;
    };
};
export declare const MultiSelect: {
    args: {
        label: string;
        multiple: boolean;
        modelValue: string;
        items: string[];
        hint: string;
    };
};
