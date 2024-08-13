declare const _default: {
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        label: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        value: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        hint: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        disabled: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        label: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        value: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        hint: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
        disabled: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }>>, {
        disabled: boolean;
    }, {}>;
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
export declare const Default: () => {
    components: {
        MucRadioButton: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
            label: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            value: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                required: true;
            };
            hint: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            disabled: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            label: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            value: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                required: true;
            };
            hint: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
            disabled: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>>, {
            disabled: boolean;
        }, {}>;
        MucRadioButtonGroup: {
            new (...args: any[]): import('../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
                modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./MucRadioButtonTypes').RadioButtonValueTypes>;
                disabled: {
                    type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                    default: boolean;
                };
                heading: {
                    type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                };
            }>> & {
                onChange?: ((value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
            }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
                change: (value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => void;
            }, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
                modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./MucRadioButtonTypes').RadioButtonValueTypes>;
                disabled: {
                    type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                    default: boolean;
                };
                heading: {
                    type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                };
            }>> & {
                onChange?: ((value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
            }, {
                disabled: boolean;
            }, true, {}, {}, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
                modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./MucRadioButtonTypes').RadioButtonValueTypes>;
                disabled: {
                    type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                    default: boolean;
                };
                heading: {
                    type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                };
            }>> & {
                onChange?: ((value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
            }, {}, {}, {}, {}, {
                disabled: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./MucRadioButtonTypes').RadioButtonValueTypes>;
            disabled: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
            heading: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            };
        }>> & {
            onChange?: ((value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
        }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
            change: (value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => void;
        }, string, {
            disabled: boolean;
        }, {}, string, {}> & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        });
    };
    template: string;
};
