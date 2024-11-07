declare const _default: {
    components: {
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes(): any;
                collapsableCheckboxes(): any;
            }> & {
                checkboxes(): any;
                collapsableCheckboxes(): any;
            };
        });
        MucCheckbox: import('vue').DefineComponent<{
            modelValue?: boolean;
        } & {
            label: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (modelValue: boolean) => any;
        } & {
            click: () => any;
        }, string, import('vue').PublicProps, Readonly<{
            modelValue?: boolean;
        } & {
            label: string;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    };
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            heading?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
            heading?: string;
        }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            heading?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        heading?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            checkboxes(): any;
            collapsableCheckboxes(): any;
        }> & {
            checkboxes(): any;
            collapsableCheckboxes(): any;
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
            label: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (modelValue: boolean) => any;
        } & {
            click: () => any;
        }, string, import('vue').PublicProps, Readonly<{
            modelValue?: boolean;
        } & {
            label: string;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes(): any;
                collapsableCheckboxes(): any;
            }> & {
                checkboxes(): any;
                collapsableCheckboxes(): any;
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
            label: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (modelValue: boolean) => any;
        } & {
            click: () => any;
        }, string, import('vue').PublicProps, Readonly<{
            modelValue?: boolean;
        } & {
            label: string;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        MucCheckboxGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                heading?: string;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            heading?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                checkboxes(): any;
                collapsableCheckboxes(): any;
            }> & {
                checkboxes(): any;
                collapsableCheckboxes(): any;
            };
        });
    };
    template: string;
};
