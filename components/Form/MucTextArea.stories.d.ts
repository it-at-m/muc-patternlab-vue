declare const _default: {
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
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
        rows: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
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
        rows: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
            default: number;
        };
    }>>, {
        required: boolean;
        rows: number;
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
        placeholder: string;
    };
};
export declare const Error: {
    args: {
        errorMsg: string;
        placeholder: string;
    };
};
export declare const Required: {
    args: {
        required: boolean;
        placeholder: string;
        label: string;
    };
};
export declare const BigTextArea: {
    args: {
        rows: number;
        label: string;
        hint: string;
        placeholder: string;
    };
};
