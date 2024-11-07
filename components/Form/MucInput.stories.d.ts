declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: string;
        } & {
            errorMsg?: string;
            placeholder?: string;
            required?: boolean;
            label?: string;
            hint?: string;
            type?: "color" | "text" | "date" | "search" | "datetime-local" | "password";
            dataList?: string[];
            suffixIcon?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
            onSuffixClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (modelValue: string) => any;
        } & {
            suffixClick: () => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue?: string;
        } & {
            errorMsg?: string;
            placeholder?: string;
            required?: boolean;
            label?: string;
            hint?: string;
            type?: "color" | "text" | "date" | "search" | "datetime-local" | "password";
            dataList?: string[];
            suffixIcon?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
            onSuffixClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue?: string;
    } & {
        errorMsg?: string;
        placeholder?: string;
        required?: boolean;
        label?: string;
        hint?: string;
        type?: "color" | "text" | "date" | "search" | "datetime-local" | "password";
        dataList?: string[];
        suffixIcon?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
        onSuffixClick?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (modelValue: string) => any;
    } & {
        suffixClick: () => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            prefix(): any;
        }> & {
            prefix(): any;
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
        placeholder: string;
    };
};
export declare const HintAndLabel: {
    args: {
        hint: string;
        label: string;
        placeholder: string;
    };
};
export declare const Password: {
    args: {
        type: string;
        modelValue: string;
        hint: string;
        placeholder: string;
    };
};
export declare const Error: {
    args: {
        errorMsg: string;
        hint: string;
        placeholder: string;
    };
};
export declare const Prefix: {
    args: {
        prefix: string;
        placeholder: string;
    };
};
export declare const SuffixIcon: {
    args: {
        suffixIcon: string;
        placeholder: string;
    };
};
export declare const Search: {
    args: {
        type: string;
        dataList: string[];
        placeholder: string;
    };
};
export declare const Color: {
    args: {
        type: string;
    };
};
export declare const Date: {
    args: {
        type: string;
    };
};
export declare const Datetime_Local: {
    args: {
        type: string;
    };
};
