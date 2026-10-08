declare const _default: {
    component: import('vue').DefineComponent<{
        modelValue?: boolean;
    } & {
        labelLeft?: string;
        labelRight?: string;
        disabled?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: boolean;
    } & {
        labelLeft?: string;
        labelRight?: string;
        disabled?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
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
        modelValue: boolean;
    };
};
export declare const WithOneLabel: {
    args: {
        modelValue: boolean;
        labelLeft: string;
    };
};
export declare const WithTwoLabels: {
    args: {
        modelValue: boolean;
        labelLeft: string;
        labelRight: string;
    };
};
