declare const _default: {
    component: import('vue').DefineComponent<{
        modelValue?: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[];
    } & {
        id: string;
        items: import('./MucSelectTypes').MucSelectItemTypes[];
        label?: string;
        hint?: string;
        multiple?: boolean;
        noItemFoundMessage?: string;
        itemTitle?: string;
        placeholder?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[]) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[];
    } & {
        id: string;
        items: import('./MucSelectTypes').MucSelectItemTypes[];
        label?: string;
        hint?: string;
        multiple?: boolean;
        noItemFoundMessage?: string;
        itemTitle?: string;
        placeholder?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('./MucSelectTypes').MucSelectItemTypes | import('./MucSelectTypes').MucSelectItemTypes[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
        selectComponent: HTMLDivElement;
        selectComponentWrapper: HTMLDivElement;
        elementRef: HTMLSelectElement;
    }, HTMLDivElement>;
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
        modelValue: {
            id: string;
            name: string;
            quantity: number;
        }[];
        id: string;
        label: string;
        multiple: boolean;
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
        id: string;
        modelValue: string;
        items: string[];
        label: string;
        hint: string;
    };
};
export declare const Placeholder: {
    args: {
        id: string;
        items: {
            id: string;
            name: string;
            quantity: number;
        }[];
        label: string;
        hint: string;
        itemTitle: string;
        placeholder: string;
    };
};
