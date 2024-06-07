declare const _default: {
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        text: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        variant: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./CommentType').default>;
            default: string;
        };
        rating: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
            required: true;
        };
        date: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        initials: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        author: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        datePrefix: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            default: string;
        };
        headline: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        text: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        variant: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./CommentType').default>;
            default: string;
        };
        rating: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
            required: true;
        };
        date: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        initials: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        author: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        datePrefix: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            default: string;
        };
        headline: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
    }>>, {
        variant: import('./CommentType').default;
        datePrefix: string;
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
        rating: number;
        author: string;
        headline: string;
        text: string;
    };
};
export declare const Slider: {
    args: {
        rating: number;
        author: string;
        headline: string;
        variant: string;
        text: string;
    };
};
