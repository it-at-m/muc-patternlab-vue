import { default as CommentType } from './CommentType';

declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * Number of stars to be displayed.
     */
    rating: number;
    /**
     * Choose the variant of the comment. Default is `listing`.
     *
     * This can be either `slider` oder `listing`.
     */
    variant?: CommentType | undefined;
}>, {
    variant: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * Number of stars to be displayed.
     */
    rating: number;
    /**
     * Choose the variant of the comment. Default is `listing`.
     *
     * This can be either `slider` oder `listing`.
     */
    variant?: CommentType | undefined;
}>, {
    variant: string;
}>>>, {
    variant: CommentType;
}, {}>, Readonly<{
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
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
