declare const _default: {
    component: {
        new (...args: any[]): import('../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            variant: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./CommentType').default>;
                default: string;
            };
            rating: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
                required: true;
            };
        }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            variant: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./CommentType').default>;
                default: string;
            };
            rating: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
                required: true;
            };
        }>>, {
            variant: import('./CommentType').default;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            variant: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./CommentType').default>;
                default: string;
            };
            rating: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
                required: true;
            };
        }>>, {}, {}, {}, {}, {
            variant: import('./CommentType').default;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        variant: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./CommentType').default>;
            default: string;
        };
        rating: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
            required: true;
        };
    }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
        variant: import('./CommentType').default;
    }, {}, string, {}> & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            initials(): any;
            author(): any;
            datePrefix(): any;
            date(): any;
            headline(): any;
            text(): any;
        }> & {
            initials(): any;
            author(): any;
            datePrefix(): any;
            date(): any;
            headline(): any;
            text(): any;
        };
    });
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
        initials: string;
        author: string;
        datePrefix: string;
        date: string;
        headline: string;
        text: string;
    };
};
export declare const Slider: {
    args: {
        rating: number;
        variant: string;
        initials: string;
        author: string;
        datePrefix: string;
        date: string;
        headline: string;
        text: string;
    };
};
