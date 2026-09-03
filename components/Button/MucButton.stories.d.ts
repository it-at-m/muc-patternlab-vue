declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            variant?: "primary" | "secondary" | "ghost";
            disabled?: boolean;
            icon?: string;
            iconOnly?: boolean;
            iconAnimated?: boolean;
            spinIconOnClick?: boolean;
            iconShownLeft?: boolean;
            type?: "submit" | "button" | "reset" | undefined;
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
            variant?: "primary" | "secondary" | "ghost";
            disabled?: boolean;
            icon?: string;
            iconOnly?: boolean;
            iconAnimated?: boolean;
            spinIconOnClick?: boolean;
            iconShownLeft?: boolean;
            type?: "submit" | "button" | "reset" | undefined;
        }> & Readonly<{
            onClick?: ((value: Event) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        variant?: "primary" | "secondary" | "ghost";
        disabled?: boolean;
        icon?: string;
        iconOnly?: boolean;
        iconAnimated?: boolean;
        spinIconOnClick?: boolean;
        iconShownLeft?: boolean;
        type?: "submit" | "button" | "reset" | undefined;
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
    title: string;
    tags: string[];
    args: {
        onClick: import('@vitest/spy').Mock<(...args: any[]) => any>;
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
        default: string;
    };
};
export declare const Secondary: {
    args: {
        default: string;
        variant: string;
    };
};
export declare const Ghost: {
    args: {
        default: string;
        variant: string;
    };
};
export declare const Disabled: {
    args: {
        default: string;
        disabled: boolean;
    };
};
export declare const IconOnly: {
    args: {
        default: string;
        icon: string;
        iconOnly: boolean;
    };
};
export declare const IconOnlySecondary: {
    args: {
        default: string;
        icon: string;
        variant: string;
        iconOnly: boolean;
    };
};
export declare const CopyButton: {
    args: {
        default: string;
        icon: string;
        variant: string;
        spinIconOnClick: boolean;
    };
};
export declare const IconAnimated: {
    args: {
        default: string;
        icon: string;
        iconAnimated: boolean;
    };
};
export declare const IconShownLeft: {
    args: {
        default: string;
        icon: string;
        iconShownLeft: boolean;
    };
};
