import { default as CommentType } from './CommentType';
type __VLS_Props = {
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
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
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
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
