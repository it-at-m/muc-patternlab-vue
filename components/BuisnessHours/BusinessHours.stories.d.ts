declare const _default: {
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            businessHours: import('./BusinessHourType').BusinessHourType[];
            toggleable?: boolean;
            icon?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
            businessHours: import('./BusinessHourType').BusinessHourType[];
            toggleable?: boolean;
            icon?: string;
        }> & Readonly<{}>, {
            icon: string;
            toggleable: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            businessHours: import('./BusinessHourType').BusinessHourType[];
            toggleable?: boolean;
            icon?: string;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            icon: string;
            toggleable: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        businessHours: import('./BusinessHourType').BusinessHourType[];
        toggleable?: boolean;
        icon?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        icon: string;
        toggleable: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            hint(): any;
        }> & {
            hint(): any;
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
        businessHours: {
            weekDay: string;
            openingHours: {
                from: string;
                to: string;
            }[];
        }[];
        toggleable: boolean;
    };
};
export declare const Fixed: {
    args: {
        toggleable: boolean;
        businessHours: {
            weekDay: string;
            openingHours: {
                from: string;
                to: string;
            }[];
        }[];
    };
};
