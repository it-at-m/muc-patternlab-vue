declare const _default: {
    component: import('vue').DefineComponent<{
        modelValue?: string;
    } & {
        errorMsg?: string;
        rows?: number;
        placeholder?: string;
        label?: string;
        hint?: string;
        required?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: string;
    } & {
        errorMsg?: string;
        rows?: number;
        placeholder?: string;
        label?: string;
        hint?: string;
        required?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
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
export declare const Error: {
    args: {
        errorMsg: string;
        placeholder: string;
    };
};
export declare const Required: {
    args: {
        required: boolean;
        placeholder: string;
        label: string;
    };
};
export declare const BigTextArea: {
    args: {
        rows: number;
        label: string;
        hint: string;
        placeholder: string;
    };
};
