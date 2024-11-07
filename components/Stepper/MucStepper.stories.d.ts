declare const _default: {
    component: import('vue').DefineComponent<{
        stepItems: import('./MucStepperTypes').StepperItem[];
        activeItem: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        changeStep: (id: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        stepItems: import('./MucStepperTypes').StepperItem[];
        activeItem: string;
    }> & Readonly<{
        onChangeStep?: ((id: string) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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
        stepItems: {
            id: string;
            label: string;
            icon: string;
        }[];
        activeItem: string;
    };
};
