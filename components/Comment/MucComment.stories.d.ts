declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            rating: number;
            variant?: import('./CommentType').default;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
            rating: number;
            variant?: import('./CommentType').default;
        }> & Readonly<{}>, {
            variant: import('./CommentType').default;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            rating: number;
            variant?: import('./CommentType').default;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            variant: import('./CommentType').default;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        rating: number;
        variant?: import('./CommentType').default;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        variant: import('./CommentType').default;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
