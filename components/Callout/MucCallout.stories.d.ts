declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            type?: "error" | "info" | "success" | "warning";
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            type?: "error" | "info" | "success" | "warning";
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        type?: "error" | "info" | "success" | "warning";
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            icon(): unknown;
            header(): unknown;
            content(): unknown;
            buttons(): unknown;
        }> & {
            icon(): unknown;
            header(): unknown;
            content(): unknown;
            buttons(): unknown;
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
export declare const Default: {
    args: {
        header: string;
        content: string;
        type: string;
    };
};
export declare const Success: {
    args: {
        header: string;
        type: string;
        content: string;
    };
};
export declare const Warning: {
    args: {
        header: string;
        type: string;
        content: string;
    };
};
export declare const Error: {
    args: {
        header: string;
        type: string;
        content: string;
    };
};
export declare const WithButton: () => {
    components: {
        MucCallout: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                type?: "error" | "info" | "success" | "warning";
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                type?: "error" | "info" | "success" | "warning";
            }> & Readonly<{}>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            type?: "error" | "info" | "success" | "warning";
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                icon(): unknown;
                header(): unknown;
                content(): unknown;
                buttons(): unknown;
            }> & {
                icon(): unknown;
                header(): unknown;
                content(): unknown;
                buttons(): unknown;
            };
        });
        MucButton: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                variant?: "icon" | "primary" | "secondary" | "ghost";
                disabled?: boolean;
                icon?: string;
                iconAnimated?: boolean;
                spinIconOnClick?: boolean;
                iconShownLeft?: boolean;
            }> & Readonly<{
                onClick?: ((value: Event) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                click: (value: Event) => any;
            }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                variant?: "icon" | "primary" | "secondary" | "ghost";
                disabled?: boolean;
                icon?: string;
                iconAnimated?: boolean;
                spinIconOnClick?: boolean;
                iconShownLeft?: boolean;
            }> & Readonly<{
                onClick?: ((value: Event) => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            variant?: "icon" | "primary" | "secondary" | "ghost";
            disabled?: boolean;
            icon?: string;
            iconAnimated?: boolean;
            spinIconOnClick?: boolean;
            iconShownLeft?: boolean;
        }> & Readonly<{
            onClick?: ((value: Event) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: (value: Event) => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
    };
    template: string;
};
