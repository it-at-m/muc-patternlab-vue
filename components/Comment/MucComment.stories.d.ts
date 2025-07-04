declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            rating: number;
            variant?: import('./CommentType').default;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            rating: number;
            variant?: import('./CommentType').default;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        rating: number;
        variant?: import('./CommentType').default;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            initials(): unknown;
            author(): unknown;
            datePrefix(): unknown;
            date(): unknown;
            headline(): unknown;
            text(): unknown;
        }> & {
            initials(): unknown;
            author(): unknown;
            datePrefix(): unknown;
            date(): unknown;
            headline(): unknown;
            text(): unknown;
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
