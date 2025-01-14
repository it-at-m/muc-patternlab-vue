declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            variant?: "primary" | "secondary" | "ghost";
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
            variant?: "primary" | "secondary" | "ghost";
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
        variant?: "primary" | "secondary" | "ghost";
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
            default(): any;
        }> & {
            default(): any;
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
        icon: string;
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
