declare const _default: {
    component: import('vue').DefineComponent<{
        datePrefix?: string;
        initials?: string;
        author: string;
        date?: string;
        headline?: string;
        text: string;
        rating: number;
        variant?: import('./CommentType').default;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        datePrefix?: string;
        initials?: string;
        author: string;
        date?: string;
        headline?: string;
        text: string;
        rating: number;
        variant?: import('./CommentType').default;
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
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
export declare const Default: {
    args: {
        rating: number;
        author: string;
        headline: string;
        text: string;
    };
};
export declare const Slider: {
    args: {
        rating: number;
        author: string;
        headline: string;
        variant: string;
        text: string;
    };
};
