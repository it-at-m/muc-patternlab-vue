declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * MucSliderItems can be put into this slot.
         */
        default(): any;
    }> & {
        /**
         * MucSliderItems can be put into this slot.
         */
        default(): any;
    };
    refs: {
        splide: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            tag: {
                default: string;
                type: StringConstructor;
            };
            options: {
                default: {};
                type: import('vue').PropType<import('@splidejs/splide').Options>;
            };
            extensions: import('vue').PropType<Record<string, import('@splidejs/splide').ComponentConstructor>>;
            transition: import('vue').PropType<import('@splidejs/splide').ComponentConstructor>;
            hasTrack: {
                default: boolean;
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }>, {
            splide: import('vue').Ref<import('@splidejs/splide').Splide | undefined, import('@splidejs/splide').Splide | undefined>;
            root: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
            index: import('vue').ComputedRef<number>;
            length: import('vue').ComputedRef<number>;
            go: (control: number | string) => void;
            sync: (target: import('@splidejs/splide').Splide) => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], import('vue').PublicProps, {
            tag: string;
            options: import('@splidejs/splide').Options;
            hasTrack: boolean;
        }, true, {}, {}, {
            SplideTrack: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        } & import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            tag: {
                default: string;
                type: StringConstructor;
            };
            options: {
                default: {};
                type: import('vue').PropType<import('@splidejs/splide').Options>;
            };
            extensions: import('vue').PropType<Record<string, import('@splidejs/splide').ComponentConstructor>>;
            transition: import('vue').PropType<import('@splidejs/splide').ComponentConstructor>;
            hasTrack: {
                default: boolean;
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        }>, {
            splide: import('vue').Ref<import('@splidejs/splide').Splide | undefined, import('@splidejs/splide').Splide | undefined>;
            root: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
            index: import('vue').ComputedRef<number>;
            length: import('vue').ComputedRef<number>;
            go: (control: number | string) => void;
            sync: (target: import('@splidejs/splide').Splide) => void;
        }, {}, {}, {}, {
            tag: string;
            options: import('@splidejs/splide').Options;
            hasTrack: boolean;
        }> | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    changeSlide: (index: number) => any;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onChangeSlide?: ((index: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    splide: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        tag: {
            default: string;
            type: StringConstructor;
        };
        options: {
            default: {};
            type: import('vue').PropType<import('@splidejs/splide').Options>;
        };
        extensions: import('vue').PropType<Record<string, import('@splidejs/splide').ComponentConstructor>>;
        transition: import('vue').PropType<import('@splidejs/splide').ComponentConstructor>;
        hasTrack: {
            default: boolean;
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }>, {
        splide: import('vue').Ref<import('@splidejs/splide').Splide | undefined, import('@splidejs/splide').Splide | undefined>;
        root: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
        index: import('vue').ComputedRef<number>;
        length: import('vue').ComputedRef<number>;
        go: (control: number | string) => void;
        sync: (target: import('@splidejs/splide').Splide) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], import('vue').PublicProps, {
        tag: string;
        options: import('@splidejs/splide').Options;
        hasTrack: boolean;
    }, true, {}, {}, {
        SplideTrack: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    } & import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        tag: {
            default: string;
            type: StringConstructor;
        };
        options: {
            default: {};
            type: import('vue').PropType<import('@splidejs/splide').Options>;
        };
        extensions: import('vue').PropType<Record<string, import('@splidejs/splide').ComponentConstructor>>;
        transition: import('vue').PropType<import('@splidejs/splide').ComponentConstructor>;
        hasTrack: {
            default: boolean;
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }>, {
        splide: import('vue').Ref<import('@splidejs/splide').Splide | undefined, import('@splidejs/splide').Splide | undefined>;
        root: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
        index: import('vue').ComputedRef<number>;
        length: import('vue').ComputedRef<number>;
        go: (control: number | string) => void;
        sync: (target: import('@splidejs/splide').Splide) => void;
    }, {}, {}, {}, {
        tag: string;
        options: import('@splidejs/splide').Options;
        hasTrack: boolean;
    }> | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
