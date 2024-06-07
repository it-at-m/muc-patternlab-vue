declare const _default: {
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        icon: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        color: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        icon: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        color: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
    }>>, {}, {}>;
    title: string;
    tags: string[];
    args: {
        onClick: import('@vitest/spy').Mock<any, any>;
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const Weather: {
    args: {
        icon: string;
    };
};
export declare const Youtube: {
    args: {
        icon: string;
        color: string;
    };
};
