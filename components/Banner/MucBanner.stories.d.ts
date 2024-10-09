declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            type?: "info" | "success" | "warning" | "emergency";
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
            type?: "info" | "success" | "warning" | "emergency";
        }> & Readonly<{}>, {
            type: "info" | "success" | "warning" | "emergency";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            type?: "info" | "success" | "warning" | "emergency";
        }> & Readonly<{}>, {}, {}, {}, {}, {
            type: "info" | "success" | "warning" | "emergency";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        type?: "info" | "success" | "warning" | "emergency";
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        type: "info" | "success" | "warning" | "emergency";
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default(): any;
        }> & {
            default(): any;
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
        type: string;
    };
};
export declare const Success: {
    args: {
        default: string;
        type: string;
    };
};
export declare const Warning: {
    args: {
        default: string;
        type: string;
    };
};
export declare const Emergency: {
    args: {
        default: string;
        type: string;
    };
};
