declare const _default: {
    components: {
        MucSliderItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): any;
            }> & {
                default(): any;
            };
        });
        MucSlider: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
                onChangeSlide?: ((index: number) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                changeSlide: (index: number) => any;
            }, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
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
                    "onSplide:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:ready"?: ((...args: any[]) => any) | undefined;
                    "onSplide:click"?: ((...args: any[]) => any) | undefined;
                    "onSplide:move"?: ((...args: any[]) => any) | undefined;
                    "onSplide:moved"?: ((...args: any[]) => any) | undefined;
                    "onSplide:active"?: ((...args: any[]) => any) | undefined;
                    "onSplide:inactive"?: ((...args: any[]) => any) | undefined;
                    "onSplide:visible"?: ((...args: any[]) => any) | undefined;
                    "onSplide:hidden"?: ((...args: any[]) => any) | undefined;
                    "onSplide:refresh"?: ((...args: any[]) => any) | undefined;
                    "onSplide:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resize"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resized"?: ((...args: any[]) => any) | undefined;
                    "onSplide:drag"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragging"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragged"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scroll"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scrolled"?: ((...args: any[]) => any) | undefined;
                    "onSplide:overflow"?: ((...args: any[]) => any) | undefined;
                    "onSplide:destroy"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:navigation:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:play"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:playing"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:pause"?: ((...args: any[]) => any) | undefined;
                    "onSplide:lazyload:loaded"?: ((...args: any[]) => any) | undefined;
                }>, {
                    splide: import('vue').Ref<import('@splidejs/splide').Splide | undefined, import('@splidejs/splide').Splide | undefined>;
                    root: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    index: import('vue').ComputedRef<number>;
                    length: import('vue').ComputedRef<number>;
                    go: (control: number | string) => void;
                    sync: (target: import('@splidejs/splide').Splide) => void;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("splide:mounted" | "splide:ready" | "splide:click" | "splide:move" | "splide:moved" | "splide:active" | "splide:inactive" | "splide:visible" | "splide:hidden" | "splide:refresh" | "splide:updated" | "splide:resize" | "splide:resized" | "splide:drag" | "splide:dragging" | "splide:dragged" | "splide:scroll" | "splide:scrolled" | "splide:overflow" | "splide:destroy" | "splide:arrows:mounted" | "splide:arrows:updated" | "splide:pagination:mounted" | "splide:pagination:updated" | "splide:navigation:mounted" | "splide:autoplay:play" | "splide:autoplay:playing" | "splide:autoplay:pause" | "splide:lazyload:loaded")[], import('vue').PublicProps, {
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
                    "onSplide:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:ready"?: ((...args: any[]) => any) | undefined;
                    "onSplide:click"?: ((...args: any[]) => any) | undefined;
                    "onSplide:move"?: ((...args: any[]) => any) | undefined;
                    "onSplide:moved"?: ((...args: any[]) => any) | undefined;
                    "onSplide:active"?: ((...args: any[]) => any) | undefined;
                    "onSplide:inactive"?: ((...args: any[]) => any) | undefined;
                    "onSplide:visible"?: ((...args: any[]) => any) | undefined;
                    "onSplide:hidden"?: ((...args: any[]) => any) | undefined;
                    "onSplide:refresh"?: ((...args: any[]) => any) | undefined;
                    "onSplide:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resize"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resized"?: ((...args: any[]) => any) | undefined;
                    "onSplide:drag"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragging"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragged"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scroll"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scrolled"?: ((...args: any[]) => any) | undefined;
                    "onSplide:overflow"?: ((...args: any[]) => any) | undefined;
                    "onSplide:destroy"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:navigation:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:play"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:playing"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:pause"?: ((...args: any[]) => any) | undefined;
                    "onSplide:lazyload:loaded"?: ((...args: any[]) => any) | undefined;
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
            }, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{}> & Readonly<{
                onChangeSlide?: ((index: number) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{
            onChangeSlide?: ((index: number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            changeSlide: (index: number) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): any;
            }> & {
                default(): any;
            };
        });
    };
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
            onChangeSlide?: ((index: number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            changeSlide: (index: number) => any;
        }, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
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
                "onSplide:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:ready"?: ((...args: any[]) => any) | undefined;
                "onSplide:click"?: ((...args: any[]) => any) | undefined;
                "onSplide:move"?: ((...args: any[]) => any) | undefined;
                "onSplide:moved"?: ((...args: any[]) => any) | undefined;
                "onSplide:active"?: ((...args: any[]) => any) | undefined;
                "onSplide:inactive"?: ((...args: any[]) => any) | undefined;
                "onSplide:visible"?: ((...args: any[]) => any) | undefined;
                "onSplide:hidden"?: ((...args: any[]) => any) | undefined;
                "onSplide:refresh"?: ((...args: any[]) => any) | undefined;
                "onSplide:updated"?: ((...args: any[]) => any) | undefined;
                "onSplide:resize"?: ((...args: any[]) => any) | undefined;
                "onSplide:resized"?: ((...args: any[]) => any) | undefined;
                "onSplide:drag"?: ((...args: any[]) => any) | undefined;
                "onSplide:dragging"?: ((...args: any[]) => any) | undefined;
                "onSplide:dragged"?: ((...args: any[]) => any) | undefined;
                "onSplide:scroll"?: ((...args: any[]) => any) | undefined;
                "onSplide:scrolled"?: ((...args: any[]) => any) | undefined;
                "onSplide:overflow"?: ((...args: any[]) => any) | undefined;
                "onSplide:destroy"?: ((...args: any[]) => any) | undefined;
                "onSplide:arrows:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:arrows:updated"?: ((...args: any[]) => any) | undefined;
                "onSplide:pagination:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:pagination:updated"?: ((...args: any[]) => any) | undefined;
                "onSplide:navigation:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:autoplay:play"?: ((...args: any[]) => any) | undefined;
                "onSplide:autoplay:playing"?: ((...args: any[]) => any) | undefined;
                "onSplide:autoplay:pause"?: ((...args: any[]) => any) | undefined;
                "onSplide:lazyload:loaded"?: ((...args: any[]) => any) | undefined;
            }>, {
                splide: import('vue').Ref<import('@splidejs/splide').Splide | undefined, import('@splidejs/splide').Splide | undefined>;
                root: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
                index: import('vue').ComputedRef<number>;
                length: import('vue').ComputedRef<number>;
                go: (control: number | string) => void;
                sync: (target: import('@splidejs/splide').Splide) => void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("splide:mounted" | "splide:ready" | "splide:click" | "splide:move" | "splide:moved" | "splide:active" | "splide:inactive" | "splide:visible" | "splide:hidden" | "splide:refresh" | "splide:updated" | "splide:resize" | "splide:resized" | "splide:drag" | "splide:dragging" | "splide:dragged" | "splide:scroll" | "splide:scrolled" | "splide:overflow" | "splide:destroy" | "splide:arrows:mounted" | "splide:arrows:updated" | "splide:pagination:mounted" | "splide:pagination:updated" | "splide:navigation:mounted" | "splide:autoplay:play" | "splide:autoplay:playing" | "splide:autoplay:pause" | "splide:lazyload:loaded")[], import('vue').PublicProps, {
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
                "onSplide:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:ready"?: ((...args: any[]) => any) | undefined;
                "onSplide:click"?: ((...args: any[]) => any) | undefined;
                "onSplide:move"?: ((...args: any[]) => any) | undefined;
                "onSplide:moved"?: ((...args: any[]) => any) | undefined;
                "onSplide:active"?: ((...args: any[]) => any) | undefined;
                "onSplide:inactive"?: ((...args: any[]) => any) | undefined;
                "onSplide:visible"?: ((...args: any[]) => any) | undefined;
                "onSplide:hidden"?: ((...args: any[]) => any) | undefined;
                "onSplide:refresh"?: ((...args: any[]) => any) | undefined;
                "onSplide:updated"?: ((...args: any[]) => any) | undefined;
                "onSplide:resize"?: ((...args: any[]) => any) | undefined;
                "onSplide:resized"?: ((...args: any[]) => any) | undefined;
                "onSplide:drag"?: ((...args: any[]) => any) | undefined;
                "onSplide:dragging"?: ((...args: any[]) => any) | undefined;
                "onSplide:dragged"?: ((...args: any[]) => any) | undefined;
                "onSplide:scroll"?: ((...args: any[]) => any) | undefined;
                "onSplide:scrolled"?: ((...args: any[]) => any) | undefined;
                "onSplide:overflow"?: ((...args: any[]) => any) | undefined;
                "onSplide:destroy"?: ((...args: any[]) => any) | undefined;
                "onSplide:arrows:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:arrows:updated"?: ((...args: any[]) => any) | undefined;
                "onSplide:pagination:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:pagination:updated"?: ((...args: any[]) => any) | undefined;
                "onSplide:navigation:mounted"?: ((...args: any[]) => any) | undefined;
                "onSplide:autoplay:play"?: ((...args: any[]) => any) | undefined;
                "onSplide:autoplay:playing"?: ((...args: any[]) => any) | undefined;
                "onSplide:autoplay:pause"?: ((...args: any[]) => any) | undefined;
                "onSplide:lazyload:loaded"?: ((...args: any[]) => any) | undefined;
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
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{
            onChangeSlide?: ((index: number) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{
        onChangeSlide?: ((index: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        changeSlide: (index: number) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            default(): any;
        }> & {
            default(): any;
        };
    });
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
export declare const Template: () => {
    components: {
        MucCard: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                title: string;
                tagline?: string;
            }> & Readonly<{
                onClick?: ((click: Event) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                click: (click: Event) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                title: string;
                tagline?: string;
            }> & Readonly<{
                onClick?: ((click: Event) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            title: string;
            tagline?: string;
        }> & Readonly<{
            onClick?: ((click: Event) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: (click: Event) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                headerPrefix(): any;
                content(): any;
            }> & {
                headerPrefix(): any;
                content(): any;
            };
        });
        MucSlider: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{
                onChangeSlide?: ((index: number) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                changeSlide: (index: number) => any;
            }, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
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
                    "onSplide:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:ready"?: ((...args: any[]) => any) | undefined;
                    "onSplide:click"?: ((...args: any[]) => any) | undefined;
                    "onSplide:move"?: ((...args: any[]) => any) | undefined;
                    "onSplide:moved"?: ((...args: any[]) => any) | undefined;
                    "onSplide:active"?: ((...args: any[]) => any) | undefined;
                    "onSplide:inactive"?: ((...args: any[]) => any) | undefined;
                    "onSplide:visible"?: ((...args: any[]) => any) | undefined;
                    "onSplide:hidden"?: ((...args: any[]) => any) | undefined;
                    "onSplide:refresh"?: ((...args: any[]) => any) | undefined;
                    "onSplide:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resize"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resized"?: ((...args: any[]) => any) | undefined;
                    "onSplide:drag"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragging"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragged"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scroll"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scrolled"?: ((...args: any[]) => any) | undefined;
                    "onSplide:overflow"?: ((...args: any[]) => any) | undefined;
                    "onSplide:destroy"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:navigation:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:play"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:playing"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:pause"?: ((...args: any[]) => any) | undefined;
                    "onSplide:lazyload:loaded"?: ((...args: any[]) => any) | undefined;
                }>, {
                    splide: import('vue').Ref<import('@splidejs/splide').Splide | undefined, import('@splidejs/splide').Splide | undefined>;
                    root: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    index: import('vue').ComputedRef<number>;
                    length: import('vue').ComputedRef<number>;
                    go: (control: number | string) => void;
                    sync: (target: import('@splidejs/splide').Splide) => void;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("splide:mounted" | "splide:ready" | "splide:click" | "splide:move" | "splide:moved" | "splide:active" | "splide:inactive" | "splide:visible" | "splide:hidden" | "splide:refresh" | "splide:updated" | "splide:resize" | "splide:resized" | "splide:drag" | "splide:dragging" | "splide:dragged" | "splide:scroll" | "splide:scrolled" | "splide:overflow" | "splide:destroy" | "splide:arrows:mounted" | "splide:arrows:updated" | "splide:pagination:mounted" | "splide:pagination:updated" | "splide:navigation:mounted" | "splide:autoplay:play" | "splide:autoplay:playing" | "splide:autoplay:pause" | "splide:lazyload:loaded")[], import('vue').PublicProps, {
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
                    "onSplide:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:ready"?: ((...args: any[]) => any) | undefined;
                    "onSplide:click"?: ((...args: any[]) => any) | undefined;
                    "onSplide:move"?: ((...args: any[]) => any) | undefined;
                    "onSplide:moved"?: ((...args: any[]) => any) | undefined;
                    "onSplide:active"?: ((...args: any[]) => any) | undefined;
                    "onSplide:inactive"?: ((...args: any[]) => any) | undefined;
                    "onSplide:visible"?: ((...args: any[]) => any) | undefined;
                    "onSplide:hidden"?: ((...args: any[]) => any) | undefined;
                    "onSplide:refresh"?: ((...args: any[]) => any) | undefined;
                    "onSplide:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resize"?: ((...args: any[]) => any) | undefined;
                    "onSplide:resized"?: ((...args: any[]) => any) | undefined;
                    "onSplide:drag"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragging"?: ((...args: any[]) => any) | undefined;
                    "onSplide:dragged"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scroll"?: ((...args: any[]) => any) | undefined;
                    "onSplide:scrolled"?: ((...args: any[]) => any) | undefined;
                    "onSplide:overflow"?: ((...args: any[]) => any) | undefined;
                    "onSplide:destroy"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:arrows:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:pagination:updated"?: ((...args: any[]) => any) | undefined;
                    "onSplide:navigation:mounted"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:play"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:playing"?: ((...args: any[]) => any) | undefined;
                    "onSplide:autoplay:pause"?: ((...args: any[]) => any) | undefined;
                    "onSplide:lazyload:loaded"?: ((...args: any[]) => any) | undefined;
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
            }, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{}> & Readonly<{
                onChangeSlide?: ((index: number) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{
            onChangeSlide?: ((index: number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            changeSlide: (index: number) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): any;
            }> & {
                default(): any;
            };
        });
        MucSliderItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): any;
            }> & {
                default(): any;
            };
        });
    };
    template: string;
};
