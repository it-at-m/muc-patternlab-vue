declare const _default: {
    component: {
        new (...args: any[]): import('../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            label: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                required: true;
            };
            href: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            target: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            noUnderline: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            label: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                required: true;
            };
            href: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            target: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            noUnderline: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>>, {
            href: string;
            target: string;
            noUnderline: boolean;
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
            label: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                required: true;
            };
            href: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            target: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            noUnderline: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>>, {}, {}, {}, {}, {
            href: string;
            target: string;
            noUnderline: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        icon: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        label: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        href: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            default: string;
        };
        target: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            default: string;
        };
        noUnderline: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
        href: string;
        target: string;
        noUnderline: boolean;
    }, {}, string, {}> & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            icon(): void;
        }> & {
            icon(): void;
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
export declare const Weather: {
    args: {
        label: string;
    };
};
export declare const LinkWithIcon: {
    args: {
        icon: string;
        label: string;
        href: string;
        noUnderline: boolean;
    };
};
