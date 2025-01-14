declare const _default: {
    component: import('vue').DefineComponent<{
        buttonText: string;
        additionalInformation?: string;
        disabled?: boolean;
        multiple?: boolean;
        invalidAmountWarning?: string;
        maxFileSize?: number;
        maxFileSizeWarning?: string;
        maxTotalFileSize?: number;
        maxTotalFileSizeWarning?: string;
    }, {
        clearWarnings: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        warning: () => any;
        files: (files: File[]) => any;
    }, string, import('vue').PublicProps, Readonly<{
        buttonText: string;
        additionalInformation?: string;
        disabled?: boolean;
        multiple?: boolean;
        invalidAmountWarning?: string;
        maxFileSize?: number;
        maxFileSizeWarning?: string;
        maxTotalFileSize?: number;
        maxTotalFileSizeWarning?: string;
    }> & Readonly<{
        onWarning?: (() => any) | undefined;
        onFiles?: ((files: File[]) => any) | undefined;
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
export declare const Default: {};
export declare const Example: {
    args: {
        buttonText: string;
        additionalInformation: string;
        invalidAmountWarning: string;
        maxFileSize: number;
        maxFileSizeWarning: string;
        maxTotalFileSize: number;
        maxTotalFileSizeWarning: string;
    };
};
