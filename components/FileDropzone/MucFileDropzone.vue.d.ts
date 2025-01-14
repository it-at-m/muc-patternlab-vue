type __VLS_Props = {
    /**
     * Text on the upload button
     */
    buttonText: string;
    /**
     * Additional Information, e.g. max file size
     */
    additionalInformation?: string;
    /**
     * Flag to disable the upload field
     */
    disabled?: boolean;
    /**
     * Flag to switch between multiple and single file upload
     */
    multiple?: boolean;
    /**
     * Warning for invalid amount of files
     */
    invalidAmountWarning?: string;
    /**
     * Maximum file size in MByte
     */
    maxFileSize?: number;
    /**
     * Warning for invalid file size
     */
    maxFileSizeWarning?: string;
    /**
     * Maximum file size sum in MByte
     */
    maxTotalFileSize?: number;
    /**
     * Warning for invalid file size sum
     */
    maxTotalFileSizeWarning?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    /**
     * Exposed function to clear all warnings
     */
    clearWarnings: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    warning: () => any;
    files: (files: File[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onWarning?: (() => any) | undefined;
    onFiles?: ((files: File[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
