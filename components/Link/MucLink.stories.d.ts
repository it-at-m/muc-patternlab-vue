declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            label: string;
            href?: string;
            prependIcon?: string;
            appendIcon?: string;
            target?: string;
            noUnderline?: boolean;
            disabled?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLAnchorElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            label: string;
            href?: string;
            prependIcon?: string;
            appendIcon?: string;
            target?: string;
            noUnderline?: boolean;
            disabled?: boolean;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        label: string;
        href?: string;
        prependIcon?: string;
        appendIcon?: string;
        target?: string;
        noUnderline?: boolean;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            prepend(): void;
            append(): void;
        }> & {
            prepend(): void;
            append(): void;
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
export declare const GenericLink: {
    args: {
        label: string;
    };
};
export declare const DisabledLink: {
    args: {
        label: string;
        disabled: boolean;
    };
};
export declare const LinkWithoutUnderlinedLabel: {
    args: {
        label: string;
        href: string;
        noUnderline: boolean;
    };
};
export declare const LinkWithIcon: {
    args: {
        appendIcon: string;
        label: string;
        href: string;
    };
};
export declare const LinkWithPrependIcon: {
    args: {
        prependIcon: string;
        label: string;
        href: string;
    };
};
