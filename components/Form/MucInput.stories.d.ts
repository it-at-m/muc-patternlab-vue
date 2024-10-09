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
            type?: "color" | "text" | "search" | "date" | "datetime-local" | "password";
            datalist?: string[];
            suffixIcon?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
            onSuffixClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (modelValue: string) => any;
        } & {
            suffixClick: () => any;
        }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
            modelValue?: string;
        } & {
            errorMsg?: string;
            placeholder?: string;
            required?: boolean;
            label?: string;
            hint?: string;
            type?: "color" | "text" | "search" | "date" | "datetime-local" | "password";
            datalist?: string[];
            suffixIcon?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
            onSuffixClick?: (() => any) | undefined;
        }>, {
            type: "color" | "text" | "search" | "date" | "datetime-local" | "password";
            required: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
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
            type?: "color" | "text" | "search" | "date" | "datetime-local" | "password";
            datalist?: string[];
            suffixIcon?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
            onSuffixClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            type: "color" | "text" | "search" | "date" | "datetime-local" | "password";
            required: boolean;
        }>;
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
        type?: "color" | "text" | "search" | "date" | "datetime-local" | "password";
        datalist?: string[];
        suffixIcon?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
        onSuffixClick?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (modelValue: string) => any;
    } & {
        suffixClick: () => any;
    }, string, {
        type: "color" | "text" | "search" | "date" | "datetime-local" | "password";
        required: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
        datalist: string[];
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
