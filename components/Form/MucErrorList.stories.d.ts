declare const _default: {
    component: import('vue').DefineComponent<{
        title?: string;
        errors: string | string[];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        title?: string;
        errors: string | string[];
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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
        title: string;
        errors: string;
    };
};
export declare const Multiple: {
    args: {
        title: string;
        errors: string[];
    };
};
