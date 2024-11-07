declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            label: string;
            href?: string;
            icon?: string;
            target?: string;
            noUnderline?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
            label: string;
            href?: string;
            icon?: string;
            target?: string;
            noUnderline?: boolean;
        }> & Readonly<{}>, {
            href: string;
            target: string;
            noUnderline: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            label: string;
            href?: string;
            icon?: string;
            target?: string;
            noUnderline?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            href: string;
            target: string;
            noUnderline: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        label: string;
        href?: string;
        icon?: string;
        target?: string;
        noUnderline?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        href: string;
        target: string;
        noUnderline: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            icon(): void;
        }> & {
            icon(): void;
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
export declare const Weather: {
    args: {
        label: string;
    };
};
export declare const LinkWithIcon: {
    args: {
        icon: string;
        label: string;
        href: string;
        noUnderline: boolean;
    };
};
