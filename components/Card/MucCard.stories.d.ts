declare const _default: {
    component: {
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
    title: string;
    tags: string[];
    args: {
        onClick: import('vitest').Mock<(...args: any[]) => any>;
    };
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
        title: string;
        tagline: string;
        content: string;
    };
};
export declare const WithHeaderPrefix: () => {
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
    };
    template: string;
};
