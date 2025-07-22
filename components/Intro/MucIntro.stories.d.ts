declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            title: string;
            tagline?: string;
            divider?: boolean;
            img?: string;
            imgAlt?: string;
            size?: number;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: number;
            divider: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
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
        }> & Readonly<{}>, {}, {}, {}, {}, {
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
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
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
        default: string;
    };
};
export declare const Icon: {
    args: {
        tagline: string;
        title: string;
        img: string;
        default: string;
    };
};
export declare const Minimal: {
    args: {
        title: string;
        divider: boolean;
        default: string;
    };
};
