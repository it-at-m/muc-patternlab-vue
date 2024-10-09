declare const _default: import('vue').DefineComponent<{
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
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    files: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<{
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
}> & Readonly<{
    onFiles?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
