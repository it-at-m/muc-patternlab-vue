declare const _default: {
    component: {
        new (...args: any[]): import('../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            variant: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"primary" | "secondary" | "ghost">;
                default: string;
            };
            disabled: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>> & {
            onClick?: (() => any) | undefined;
        }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
            click: () => void;
        }, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            variant: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"primary" | "secondary" | "ghost">;
                default: string;
            };
            disabled: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>> & {
            onClick?: (() => any) | undefined;
        }, {
            variant: "primary" | "secondary" | "ghost";
            disabled: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            variant: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"primary" | "secondary" | "ghost">;
                default: string;
            };
            disabled: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>> & {
            onClick?: (() => any) | undefined;
        }, {}, {}, {}, {}, {
            variant: "primary" | "secondary" | "ghost";
            disabled: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        icon: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        variant: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"primary" | "secondary" | "ghost">;
            default: string;
        };
        disabled: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }>> & {
        onClick?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
        click: () => void;
    }, string, {
        variant: "primary" | "secondary" | "ghost";
        disabled: boolean;
    }, {}, string, {}> & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default(): any;
        }> & {
            default(): any;
        };
    });
    title: string;
    tags: string[];
    args: {
        onClick: import('@vitest/spy').Mock<any, any>;
    };
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
    };
};
export declare const Secondary: {
    args: {
        default: string;
        variant: string;
    };
};
export declare const Ghost: {
    args: {
        default: string;
        variant: string;
    };
};
export declare const Disabled: {
    args: {
        default: string;
        disabled: boolean;
    };
};
export declare const Icon: {
    args: {
        default: string;
        icon: string;
    };
};
