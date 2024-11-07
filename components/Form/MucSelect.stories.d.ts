declare const _default: {
    component: import('vue').DefineComponent<{
        modelValue?: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[];
    } & {
        items: import('./MucSelectTypes').MucSelectItemTypes[];
        label?: string;
        hint?: string;
        multiple?: boolean;
        noItemFoundMessage?: string;
        itemTitle?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (modelValue: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[]) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[];
    } & {
        items: import('./MucSelectTypes').MucSelectItemTypes[];
        label?: string;
        hint?: string;
        multiple?: boolean;
        noItemFoundMessage?: string;
        itemTitle?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
        selectComponent: HTMLDivElement;
    }, any>;
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
        modelValue: {
            id: string;
            name: string;
            quantity: number;
        };
        items: {
            id: string;
            name: string;
            quantity: number;
        }[];
        label: string;
        hint: string;
        itemTitle: string;
    };
};
export declare const MultiSelect: {
    args: {
        label: string;
        multiple: boolean;
        modelValue: {
            id: string;
            name: string;
            quantity: number;
        };
        items: {
            id: string;
            name: string;
            quantity: number;
        }[];
        hint: string;
        itemTitle: string;
    };
};
export declare const StringSelect: {
    args: {
        modelValue: string;
        items: string[];
        label: string;
        hint: string;
    };
};
