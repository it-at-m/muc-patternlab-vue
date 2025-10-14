type IntroType = "detail" | "overview";
type __VLS_Props = {
    /**
     * Title of the Intro
     */
    title: string;
    /**
     * Tagline of the Intro (above the title)
     */
    tagline?: string;
    /**
     * Toggle to show a divider between title and body
     */
    divider?: boolean;
    /**
     * Img to show next to title and tagline.
     * Only works with variant='detail'
     */
    img?: string;
    /**
     * ImgAlt useful for screen readers
     */
    imgAlt?: string;
    /**
     * Size of the image
     */
    size?: number;
    /**
     * Variant of the Intro -
     * detail (https://patternlab.muenchen.space/?p=components-intro-vertical-article)
     * or
     * overview (default - https://patternlab.muenchen.space/?p=components-intro-summary-text).
     */
    variant?: IntroType;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * Body of the Intro.
         */
        default(): unknown;
    }> & {
        /**
         * Body of the Intro.
         */
        default(): unknown;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    variant: IntroType;
    size: number;
    divider: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
