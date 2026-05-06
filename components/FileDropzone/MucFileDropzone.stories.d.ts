declare const _default: {
    component: import('vue').DefineComponent<{
        buttonText: string;
        additionalInformation?: string;
        disabled?: boolean;
        label?: string;
        multiple?: boolean;
        invalidAmountWarning?: string;
        maxFileSize?: number;
        maxFileSizeWarning?: string;
        maxTotalFileSize?: number;
        maxTotalFileSizeWarning?: string;
        required?: boolean;
    }, {
        clearWarnings: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        warning: () => any;
        files: (files: File[]) => any;
    }, string, import('vue').PublicProps, Readonly<{
        buttonText: string;
        additionalInformation?: string;
        disabled?: boolean;
        label?: string;
        multiple?: boolean;
        invalidAmountWarning?: string;
        maxFileSize?: number;
        maxFileSizeWarning?: string;
        maxTotalFileSize?: number;
        maxTotalFileSizeWarning?: string;
        required?: boolean;
    }> & Readonly<{
        onWarning?: (() => any) | undefined;
        onFiles?: ((files: File[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    title: string;
    tags: string[];
    args: {
        onFiles: import('@vitest/spy').Mock<(...args: any[]) => any>;
        onWarning: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
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
export declare const Required: {
    args: {
        buttonText: string;
        additionalInformation: string;
        invalidAmountWarning: string;
        label: string;
        maxFileSize: number;
        maxFileSizeWarning: string;
        maxTotalFileSize: number;
        maxTotalFileSizeWarning: string;
        required: boolean;
    };
};
