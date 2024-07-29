declare const _default: {
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        title: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        errors: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[]>;
            required: true;
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        title: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        errors: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[]>;
            required: true;
        };
    }>>, {}, {}>;
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
        title: string;
        errors: string;
    };
};
export declare const Multiple: {
    args: {
        title: string;
        errors: string[];
    };
};
