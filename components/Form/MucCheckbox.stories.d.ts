declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: boolean;
        } & {
            id: string;
            label?: string;
            hint?: string;
            name?: string;
            required?: boolean;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => any;
        } & {
            click: () => any;
        }, import('vue').PublicProps, {
            required: boolean;
            name: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue?: boolean;
        } & {
            id: string;
            label?: string;
            hint?: string;
            name?: string;
            required?: boolean;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            required: boolean;
            name: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue?: boolean;
    } & {
        id: string;
        label?: string;
        hint?: string;
        name?: string;
        required?: boolean;
    }> & Readonly<{
        onClick?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => any;
    } & {
        click: () => any;
    }, string, {
        required: boolean;
        name: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            label?(_: {}): any;
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
        id: string;
        label: string;
        hint: string;
    };
};
export declare const WithLinkInLabel: {
    args: {
        id: string;
        name: string;
        required: boolean;
    };
    render: (args: Record<string, unknown>) => {
        components: {
            MucCheckbox: {
                new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                    modelValue?: boolean;
                } & {
                    id: string;
                    label?: string;
                    hint?: string;
                    name?: string;
                    required?: boolean;
                }> & Readonly<{
                    onClick?: (() => any) | undefined;
                    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                    "update:modelValue": (value: boolean) => any;
                } & {
                    click: () => any;
                }, import('vue').PublicProps, {
                    required: boolean;
                    name: string;
                }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<{
                    modelValue?: boolean;
                } & {
                    id: string;
                    label?: string;
                    hint?: string;
                    name?: string;
                    required?: boolean;
                }> & Readonly<{
                    onClick?: (() => any) | undefined;
                    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                }>, {}, {}, {}, {}, {
                    required: boolean;
                    name: string;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import('vue').ComponentOptionsBase<Readonly<{
                modelValue?: boolean;
            } & {
                id: string;
                label?: string;
                hint?: string;
                name?: string;
                required?: boolean;
            }> & Readonly<{
                onClick?: (() => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                "update:modelValue": (value: boolean) => any;
            } & {
                click: () => any;
            }, string, {
                required: boolean;
                name: string;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
                $slots: {
                    label?(_: {}): any;
                };
            });
        };
        setup(): {
            args: Record<string, unknown>;
        };
        template: string;
    };
};
