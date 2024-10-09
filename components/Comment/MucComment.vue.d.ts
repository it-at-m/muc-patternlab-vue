import { default as CommentType } from './CommentType';
declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Slot for the commenter's initials or avatar.
         */
        initials(): any;
        /**
         * Slot for the author's name or username.
         */
        author(): any;
        /**
         * Prefix for the date (e.g., "am").
         */
        datePrefix(): any;
        /**
         * Slot for the comment's date.
         */
        date(): any;
        /**
         * Slot for the comment's headline or title.
         */
        headline(): any;
        /**
         * Slot for the main text content of the comment.
         */
        text(): any;
    }> & {
        /**
         * Slot for the commenter's initials or avatar.
         */
        initials(): any;
        /**
         * Slot for the author's name or username.
         */
        author(): any;
        /**
         * Prefix for the date (e.g., "am").
         */
        datePrefix(): any;
        /**
         * Slot for the comment's date.
         */
        date(): any;
        /**
         * Slot for the comment's headline or title.
         */
        headline(): any;
        /**
         * Slot for the main text content of the comment.
         */
        text(): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    /**
     * Number of stars to be displayed.
     */
    rating: number;
    /**
     * Choose the variant of the comment. Default is `listing`.
     *
     * This can be either `slider` oder `listing`.
     */
    variant?: CommentType;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    /**
     * Number of stars to be displayed.
     */
    rating: number;
    /**
     * Choose the variant of the comment. Default is `listing`.
     *
     * This can be either `slider` oder `listing`.
     */
    variant?: CommentType;
}> & Readonly<{}>, {
    variant: CommentType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
