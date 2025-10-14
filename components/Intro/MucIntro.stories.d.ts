declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            title: string;
            tagline?: string;
            divider?: boolean;
            img?: string;
            imgAlt?: string;
            size?: number;
            variant?: "detail" | "overview";
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            variant: "detail" | "overview";
            size: number;
            divider: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            title: string;
            tagline?: string;
            divider?: boolean;
            img?: string;
            imgAlt?: string;
            size?: number;
            variant?: "detail" | "overview";
        }> & Readonly<{}>, {}, {}, {}, {}, {
            variant: "detail" | "overview";
            size: number;
            divider: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        title: string;
        tagline?: string;
        divider?: boolean;
        img?: string;
        imgAlt?: string;
        size?: number;
        variant?: "detail" | "overview";
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        variant: "detail" | "overview";
        size: number;
        divider: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default(): unknown;
        }> & {
            default(): unknown;
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
        tagline: string;
        title: string;
        variant: string;
        default: string;
    };
};
export declare const Icon: {
    args: {
        tagline: string;
        title: string;
        variant: string;
        img: string;
        default: string;
    };
};
export declare const MinimalDetail: {
    args: {
        title: string;
        divider: boolean;
        variant: string;
        default: string;
    };
};
export declare const MinimalOverview: {
    args: {
        title: string;
        divider: boolean;
        variant: string;
        default: string;
    };
};
