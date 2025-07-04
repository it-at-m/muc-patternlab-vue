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
                default(): unknown;
            }> & {
                default(): unknown;
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
                default(): unknown;
            }> & {
                default(): unknown;
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
            default(): unknown;
        }> & {
            default(): unknown;
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
                headerPrefix(): unknown;
                content(): unknown;
            }> & {
                headerPrefix(): unknown;
                content(): unknown;
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
                default(): unknown;
            }> & {
                default(): unknown;
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
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
    };
    template: string;
};
