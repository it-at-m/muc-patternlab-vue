declare const _default: {
    components: {
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            }> & {
                checkboxes: unknown;
                collapsableCheckboxes: unknown;
            };
        });
        MucCheckbox: import('vue').DefineComponent<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => any;
        } & {
            click: () => any;
        }, string, import('vue').PublicProps, Readonly<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    };
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            heading?: string;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            heading?: string;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        heading?: string;
        errorMsg?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
        MucCheckbox: import('vue').DefineComponent<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => any;
        } & {
            click: () => any;
        }, string, import('vue').PublicProps, Readonly<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
        MucCheckbox: import('vue').DefineComponent<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => any;
        } & {
            click: () => any;
        }, string, import('vue').PublicProps, Readonly<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
        MucCheckbox: import('vue').DefineComponent<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => any;
        } & {
            click: () => any;
        }, string, import('vue').PublicProps, Readonly<{
            modelValue?: boolean;
        } & {
            id: string;
            label: string;
            hint?: string;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
                errorMsg?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
            errorMsg?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
