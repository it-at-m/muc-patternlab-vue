declare const _default: {
    component: import('vue').DefineComponent<{
        modelValue?: import('./MucCalendarType').MucCalendarSelected;
    } & {
        viewMonth?: Date;
        min?: Date;
        max?: Date;
        showAdjacentMonths?: boolean;
        variant?: import('./MucCalendarType').CalendarTypes;
        disabled?: boolean;
        disableViewChange?: boolean;
        noAnimation?: boolean;
        allowedDates?: import('./MucCalendarType').AllowedDateFunction;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('./MucCalendarType').MucCalendarSelected) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: import('./MucCalendarType').MucCalendarSelected;
    } & {
        viewMonth?: Date;
        min?: Date;
        max?: Date;
        showAdjacentMonths?: boolean;
        variant?: import('./MucCalendarType').CalendarTypes;
        disabled?: boolean;
        disableViewChange?: boolean;
        noAnimation?: boolean;
        allowedDates?: import('./MucCalendarType').AllowedDateFunction;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('./MucCalendarType').MucCalendarSelected) => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
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
export declare const Single: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        variant: string;
        showAdjacentMonths: boolean;
    };
};
export declare const MultipleWithSelectedViewMonth: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        variant: string;
        viewMonth: Date;
    };
};
export declare const Range: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        variant: string;
        showAdjacentMonths: boolean;
    };
};
export declare const DisabledWithPreSelectedDate: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        disabled: boolean;
        showAdjacentMonths: boolean;
        modelValue: Date;
    };
};
export declare const AllowedDatesWithNoAnimation: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        noAnimation: boolean;
        allowedDates: (date: Date) => boolean;
    };
};
export declare const DisabledPreSelectedViewMonth: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        disabled: boolean;
        showAdjacentMonths: boolean;
        viewMonth: Date;
    };
};
export declare const DisableViewChange: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        variant: string;
        showAdjacentMonths: boolean;
        disableViewChange: boolean;
    };
};
export declare const MinAndMax: {
    argTypes: {
        viewMonth: {
            control: string;
        };
        min: {
            control: string;
        };
        max: {
            control: string;
        };
    };
    args: {
        variant: string;
        viewMonth: Date;
        min: Date;
        max: Date;
    };
};
