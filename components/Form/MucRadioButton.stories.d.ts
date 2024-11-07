declare const _default: {
    component: import('vue').DefineComponent<{
        value: string;
        label?: string;
        hint?: string;
        disabled?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        value: string;
        label?: string;
        hint?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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
        MucRadioButton: import('vue').DefineComponent<{
            value: string;
            label?: string;
            hint?: string;
            disabled?: boolean;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
            value: string;
            label?: string;
            hint?: string;
            disabled?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        MucRadioButtonGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                modelValue?: import('./MucRadioButtonTypes').RadioButtonValueTypes;
            } & {
                heading?: string;
                disabled?: boolean;
            }> & Readonly<{
                onChange?: ((value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
                "onUpdate:modelValue"?: ((modelValue: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                change: (value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any;
                "update:modelValue": (modelValue: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                modelValue?: import('./MucRadioButtonTypes').RadioButtonValueTypes;
            } & {
                heading?: string;
                disabled?: boolean;
            }> & Readonly<{
                onChange?: ((value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
                "onUpdate:modelValue"?: ((modelValue: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            modelValue?: import('./MucRadioButtonTypes').RadioButtonValueTypes;
        } & {
            heading?: string;
            disabled?: boolean;
        }> & Readonly<{
            onChange?: ((value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
            "onUpdate:modelValue"?: ((modelValue: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            change: (value: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any;
            "update:modelValue": (modelValue: import('./MucRadioButtonTypes').RadioButtonValueTypes) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        });
    };
    template: string;
};
