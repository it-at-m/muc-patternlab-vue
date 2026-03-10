declare const _default: {
    components: {
        MucAccordion: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header?: string;
            multiple?: boolean;
            defaultItem?: string;
            detailPageMargin?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
    };
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            id: string;
            header?: string;
            multiple?: boolean;
            defaultItem?: string;
            detailPageMargin?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            id: string;
            header?: string;
            multiple?: boolean;
            defaultItem?: string;
            detailPageMargin?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        id: string;
        header?: string;
        multiple?: boolean;
        defaultItem?: string;
        detailPageMargin?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
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
        MucAccordion: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header?: string;
            multiple?: boolean;
            defaultItem?: string;
            detailPageMargin?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
        MucAccordionItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                open: (id: string) => any;
                close: (id: string) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
                section: HTMLElement;
            }, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header: string;
            activeItems?: string[];
        }> & Readonly<{
            onOpen?: ((id: string) => any) | undefined;
            onClose?: ((id: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            open: (id: string) => any;
            close: (id: string) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            }> & {
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            };
        });
    };
    template: string;
};
export declare const Multiple: () => {
    components: {
        MucAccordion: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header?: string;
            multiple?: boolean;
            defaultItem?: string;
            detailPageMargin?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
        MucAccordionItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                open: (id: string) => any;
                close: (id: string) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
                section: HTMLElement;
            }, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header: string;
            activeItems?: string[];
        }> & Readonly<{
            onOpen?: ((id: string) => any) | undefined;
            onClose?: ((id: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            open: (id: string) => any;
            close: (id: string) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            }> & {
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            };
        });
    };
    template: string;
};
export declare const DetailPageMargin: () => {
    components: {
        MucAccordion: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header?: string;
            multiple?: boolean;
            defaultItem?: string;
            detailPageMargin?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
        MucAccordionItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                open: (id: string) => any;
                close: (id: string) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
                section: HTMLElement;
            }, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header: string;
            activeItems?: string[];
        }> & Readonly<{
            onOpen?: ((id: string) => any) | undefined;
            onClose?: ((id: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            open: (id: string) => any;
            close: (id: string) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            }> & {
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            };
        });
    };
    template: string;
};
export declare const WithMetadataHeader: () => {
    components: {
        MucAccordion: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header?: string;
                multiple?: boolean;
                defaultItem?: string;
                detailPageMargin?: boolean;
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header?: string;
            multiple?: boolean;
            defaultItem?: string;
            detailPageMargin?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
        MucAccordionItem: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                open: (id: string) => any;
                close: (id: string) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
                section: HTMLElement;
            }, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                id: string;
                header: string;
                activeItems?: string[];
            }> & Readonly<{
                onOpen?: ((id: string) => any) | undefined;
                onClose?: ((id: string) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            id: string;
            header: string;
            activeItems?: string[];
        }> & Readonly<{
            onOpen?: ((id: string) => any) | undefined;
            onClose?: ((id: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            open: (id: string) => any;
            close: (id: string) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            }> & {
                subtitleIcon(): unknown;
                subtitle(): unknown;
                content(): unknown;
            };
        });
        MucIcon: import('vue').DefineComponent<{
            icon: string;
            color?: string;
        }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
            icon: string;
            color?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, SVGSVGElement>;
    };
    template: string;
};
