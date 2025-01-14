type __VLS_Props = {
    /**
     * Size of the spinner relative or absolute.
     * Typical units for styling size are allowed.
     */
    size: string;
    /**
     * Number that represents the progress.
     * Numbers lower than 0 result in '0%'.
     * Numbers greater than 100 result in '100%'.
     * An empty value results in an empty string.
     */
    percentage?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, SVGSVGElement>;
export default _default;
