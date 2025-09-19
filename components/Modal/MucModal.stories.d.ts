declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            close: (...args: any[]) => void;
        }, import('vue').PublicProps, {
            open: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            dialogRef: HTMLDialogElement;
        }, HTMLDialogElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            open: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        open: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: (...args: any[]) => void;
    }, string, {
        open: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            title(): unknown;
            body(): unknown;
            buttons(): unknown;
            actions(): unknown;
        }> & {
            title(): unknown;
            body(): unknown;
            buttons(): unknown;
            actions(): unknown;
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
export declare const Default: (args: any) => {
    components: {
        MucModal: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onClose?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                close: (...args: any[]) => void;
            }, import('vue').PublicProps, {
                open: boolean;
            }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
                dialogRef: HTMLDialogElement;
            }, HTMLDialogElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import('vue').ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onClose?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, {
                open: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            close: (...args: any[]) => void;
        }, string, {
            open: boolean;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                title(): unknown;
                body(): unknown;
                buttons(): unknown;
                actions(): unknown;
            }> & {
                title(): unknown;
                body(): unknown;
                buttons(): unknown;
                actions(): unknown;
            };
        });
        MucButton: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                variant?: "icon" | "primary" | "secondary" | "ghost";
                disabled?: boolean;
                icon?: string;
                iconAnimated?: boolean;
                iconShownLeft?: boolean;
            }> & Readonly<{
                onClick?: (() => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                click: () => any;
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
                iconShownLeft?: boolean;
            }> & Readonly<{
                onClick?: (() => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            variant?: "icon" | "primary" | "secondary" | "ghost";
            disabled?: boolean;
            icon?: string;
            iconAnimated?: boolean;
            iconShownLeft?: boolean;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: () => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
    };
    setup(): {
        args: any;
        openState: import('vue').Ref<any, any>;
        closeDialog: () => boolean;
    };
    template: string;
};
export declare const Minimal: (args: any) => {
    components: {
        MucModal: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onClose?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                close: (...args: any[]) => void;
            }, import('vue').PublicProps, {
                open: boolean;
            }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
                dialogRef: HTMLDialogElement;
            }, HTMLDialogElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import('vue').ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onClose?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, {
                open: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            close: (...args: any[]) => void;
        }, string, {
            open: boolean;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                title(): unknown;
                body(): unknown;
                buttons(): unknown;
                actions(): unknown;
            }> & {
                title(): unknown;
                body(): unknown;
                buttons(): unknown;
                actions(): unknown;
            };
        });
        MucButton: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
                variant?: "icon" | "primary" | "secondary" | "ghost";
                disabled?: boolean;
                icon?: string;
                iconAnimated?: boolean;
                iconShownLeft?: boolean;
            }> & Readonly<{
                onClick?: (() => any) | undefined;
            }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                click: () => any;
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
                iconShownLeft?: boolean;
            }> & Readonly<{
                onClick?: (() => any) | undefined;
            }>, {}, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{
            variant?: "icon" | "primary" | "secondary" | "ghost";
            disabled?: boolean;
            icon?: string;
            iconAnimated?: boolean;
            iconShownLeft?: boolean;
        }> & Readonly<{
            onClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: () => any;
        }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: Readonly<{
                default(): unknown;
            }> & {
                default(): unknown;
            };
        });
    };
    setup(): {
        args: any;
        openState: import('vue').Ref<any, any>;
        closeDialog: () => boolean;
    };
    template: string;
};
