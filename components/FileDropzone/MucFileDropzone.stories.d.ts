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
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        files: (...args: any[]) => void;
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
        onFiles?: ((...args: any[]) => any) | undefined;
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
export declare const Default: {};
