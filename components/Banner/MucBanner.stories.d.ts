declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            variant: "header" | "content";
            type?: "info" | "success" | "warning" | "emergency";
            noIcon?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            variant: "header" | "content";
            type?: "info" | "success" | "warning" | "emergency";
            noIcon?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        variant: "header" | "content";
        type?: "info" | "success" | "warning" | "emergency";
        noIcon?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default(): unknown;
        }> & {
            default(): unknown;
        };
    });
    title: string;
    tags: string[];
    excludeStories: RegExp;
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
        default: string;
        variant: string;
        type: string;
    };
};
export declare const Success: {
    args: {
        default: string;
        variant: string;
        type: string;
    };
};
export declare const Warning: {
    args: {
        default: string;
        variant: string;
        type: string;
    };
};
export declare const Emergency: {
    args: {
        default: string;
        variant: string;
        type: string;
    };
};
export declare const Header: {
    args: {
        default: string;
        variant: string;
        type: string;
    };
};
export declare const NoIcon: {
    args: {
        default: string;
        variant: string;
        type: string;
        noIcon: boolean;
    };
};
