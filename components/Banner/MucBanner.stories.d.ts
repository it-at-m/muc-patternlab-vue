declare const _default: {
    component: {
        new (...args: any[]): import('../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            type: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "emergency">;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            type: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "emergency">;
                default: string;
            };
        }>>, {
            type: "info" | "warning" | "emergency";
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            type: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "emergency">;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            type: "info" | "warning" | "emergency";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        type: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "emergency">;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
        type: "info" | "warning" | "emergency";
    }, {}, string, {}> & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
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