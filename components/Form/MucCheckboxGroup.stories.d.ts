declare const _default: {
    components: {
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            headingLevel?: 2 | 3 | 4 | 5 | 6;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            headingLevel: 2 | 3 | 4 | 5 | 6;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            }> & {
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            };
        });
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
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            heading?: string;
            headingLevel?: 2 | 3 | 4 | 5 | 6;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            headingLevel: 2 | 3 | 4 | 5 | 6;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            heading?: string;
            headingLevel?: 2 | 3 | 4 | 5 | 6;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            headingLevel: 2 | 3 | 4 | 5 | 6;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        heading?: string;
        headingLevel?: 2 | 3 | 4 | 5 | 6;
        errorMsg?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        headingLevel: 2 | 3 | 4 | 5 | 6;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            checkboxes: unknown;
            collapsableCheckboxes: unknown;
        }> & {
            checkboxes: unknown;
            collapsableCheckboxes: unknown;
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
export declare const NotCollapsable: () => {
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
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            headingLevel?: 2 | 3 | 4 | 5 | 6;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            headingLevel: 2 | 3 | 4 | 5 | 6;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            }> & {
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            };
        });
    };
    template: string;
};
export declare const Collapsable: () => {
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
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            headingLevel?: 2 | 3 | 4 | 5 | 6;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            headingLevel: 2 | 3 | 4 | 5 | 6;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            }> & {
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            };
        });
    };
    template: string;
};
export declare const Error: () => {
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
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            headingLevel?: 2 | 3 | 4 | 5 | 6;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            headingLevel: 2 | 3 | 4 | 5 | 6;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            }> & {
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            };
        });
    };
    template: string;
};
export declare const HeadingLevel: () => {
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
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                headingLevel?: 2 | 3 | 4 | 5 | 6;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {
                headingLevel: 2 | 3 | 4 | 5 | 6;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            headingLevel?: 2 | 3 | 4 | 5 | 6;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            headingLevel: 2 | 3 | 4 | 5 | 6;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            }> & {
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            };
        });
    };
    template: string;
};
