declare const _default: {
    component: {
        new (...args: any[]): import('../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            type: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "success" | "error">;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            type: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "success" | "error">;
                default: string;
            };
        }>>, {
            type: "info" | "warning" | "success" | "error";
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            type: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "success" | "error">;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            type: "info" | "warning" | "success" | "error";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        type: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"info" | "warning" | "success" | "error">;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
        type: "info" | "warning" | "success" | "error";
    }, {}, string, {}> & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            icon(): any;
            header(): any;
            content(): any;
        }> & {
            icon(): any;
            header(): any;
            content(): any;
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
        header: string;
        content: string;
        type: string;
    };
};
export declare const Success: {
    args: {
        header: string;
        type: string;
        content: string;
    };
};
export declare const Warning: {
    args: {
        header: string;
        type: string;
        content: string;
    };
};
export declare const Error: {
    args: {
        header: string;
        type: string;
        content: string;
    };
};
