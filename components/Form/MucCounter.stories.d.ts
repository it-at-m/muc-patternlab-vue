declare const _default: {
    component: import('vue').DefineComponent<{
        modelValue?: number;
    } & {
        label: string;
        min?: number;
        max?: number;
        link?: string;
        disabled?: boolean;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (modelValue: number) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: number;
    } & {
        label: string;
        min?: number;
        max?: number;
        link?: string;
        disabled?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: number) => any) | undefined;
    }>, {
        disabled: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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
        modelValue: number;
        label: string;
    };
};
export declare const MinAndMax: {
    args: {
        modelValue: number;
        min: number;
        max: number;
        label: string;
    };
};
export declare const Link: {
    args: {
        link: string;
        modelValue: number;
        label: string;
    };
};
export declare const Disabled: {
    args: {
        disabled: boolean;
        modelValue: number;
        label: string;
    };
};
