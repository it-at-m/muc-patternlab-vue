declare const _default: {
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        label: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
        click: () => void;
    }, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        label: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
    }>> & {
        onClick?: (() => any) | undefined;
    }, {}, {}>;
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
        label: string;
    };
};
