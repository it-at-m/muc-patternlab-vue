declare const _default: {
    component: {
        new (...args: any[]): import('../../../vue/dist/vue.esm-bundler.js').CreateComponentPublicInstance<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            businessHours: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./BusinessHourType').BusinessHourType[]>;
                required: true;
            };
            toggleable: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            businessHours: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./BusinessHourType').BusinessHourType[]>;
                required: true;
            };
            toggleable: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>>, {
            icon: string;
            toggleable: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
            icon: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
                default: string;
            };
            businessHours: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./BusinessHourType').BusinessHourType[]>;
                required: true;
            };
            toggleable: {
                type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
                default: boolean;
            };
        }>>, {}, {}, {}, {}, {
            icon: string;
            toggleable: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsBase<Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        icon: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            default: string;
        };
        businessHours: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./BusinessHourType').BusinessHourType[]>;
            required: true;
        };
        toggleable: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
    }>>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, {
        icon: string;
        toggleable: boolean;
    }, {}, string, {}> & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & (new () => {
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
