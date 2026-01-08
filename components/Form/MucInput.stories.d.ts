declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: string;
        } & {
            id: string;
            errorMsg?: string;
            placeholder?: string;
            required?: boolean;
            label?: string;
            hint?: string;
            type?: "text" | "color" | "date" | "search" | "datetime-local" | "password";
            dataList?: string[];
            suffixIcon?: string;
            max?: number;
            autocomplete?: string;
            name?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onSuffixClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: string) => any;
        } & {
            suffixClick: () => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue?: string;
        } & {
            id: string;
            errorMsg?: string;
            placeholder?: string;
            required?: boolean;
            label?: string;
            hint?: string;
            type?: "text" | "color" | "date" | "search" | "datetime-local" | "password";
            dataList?: string[];
            suffixIcon?: string;
            max?: number;
            autocomplete?: string;
            name?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onSuffixClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue?: string;
    } & {
        id: string;
        errorMsg?: string;
        placeholder?: string;
        required?: boolean;
        label?: string;
        hint?: string;
        type?: "text" | "color" | "date" | "search" | "datetime-local" | "password";
        dataList?: string[];
        suffixIcon?: string;
        max?: number;
        autocomplete?: string;
        name?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onSuffixClick?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string) => any;
    } & {
        suffixClick: () => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            prefix(): unknown;
        }> & {
            prefix(): unknown;
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
        placeholder: string;
    };
};
export declare const HintAndLabel: {
    args: {
        id: string;
        hint: string;
        label: string;
        placeholder: string;
    };
};
export declare const Password: {
    args: {
        id: string;
        type: string;
        modelValue: string;
        hint: string;
        placeholder: string;
    };
};
export declare const Error: {
    args: {
        id: string;
        errorMsg: string;
        hint: string;
        placeholder: string;
    };
};
export declare const Prefix: {
    args: {
        id: string;
        prefix: string;
        placeholder: string;
    };
};
export declare const SuffixIcon: {
    args: {
        id: string;
        suffixIcon: string;
        placeholder: string;
    };
};
export declare const Search: {
    args: {
        id: string;
        type: string;
        dataList: string[];
        placeholder: string;
    };
};
export declare const Color: {
    args: {
        id: string;
        type: string;
    };
};
export declare const Date: {
    args: {
        id: string;
        type: string;
    };
};
export declare const Datetime_Local: {
    args: {
        id: string;
        type: string;
    };
};
