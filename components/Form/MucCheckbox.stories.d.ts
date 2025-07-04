declare const _default: {
    component: import('vue').DefineComponent<{
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
        label: string;
        hint: string;
    };
};
