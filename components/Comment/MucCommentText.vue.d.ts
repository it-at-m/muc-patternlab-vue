import { default as CommentType } from './CommentType';
type __VLS_Props = {
    /**
     * Text input to display in front of the date text input
     */
    datePrefix?: string;
    /**
     * Optional text input to display the initials of the author next to name
     *
     * (if kept empty will be calculated automatically)
     */
    initials?: string;
    /**
     * Text input to display the author name of the comment
     */
    author: string;
    /**
     * Text input to display the date of the comment
     */
    date?: string;
    /**
     * Text input to display the headline of the comment
     */
    headline?: string;
    /**
     * Text input to display the content of the comment
     */
    text: string;
    /**
     * Rating of the comment in stars, between 0.0 and 5.0
     */
    rating: number;
    /**
     * Choose the variant of the comment. Default is `listing`.
     *
     * This can be either `slider` oder `listing`.
     */
    variant?: CommentType;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
