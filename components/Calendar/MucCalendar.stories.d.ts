declare const _default: {
    component: import('vue').DefineComponent<{
        modelValue?: import('./MucCalendarType').MucCalendarSelected;
    } & {
        viewMonth?: Date;
        showAdjacentMonths?: boolean;
        variant?: import('./MucCalendarType').CalendarTypes;
        disabled?: boolean;
        noAnimation?: boolean;
        allowedDates?: import('./MucCalendarType').AllowedDateFunction;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('./MucCalendarType').MucCalendarSelected) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: import('./MucCalendarType').MucCalendarSelected;
    } & {
        viewMonth?: Date;
        showAdjacentMonths?: boolean;
        variant?: import('./MucCalendarType').CalendarTypes;
        disabled?: boolean;
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
    args: {
        variant: string;
        showAdjacentMonths: boolean;
    };
};
export declare const MultipleWithSelectedViewMonth: {
    args: {
        variant: string;
        viewMonth: Date;
    };
};
export declare const Range: {
    args: {
        variant: string;
        showAdjacentMonths: boolean;
    };
};
export declare const DisabledWithPreSelectedDate: {
    args: {
        disabled: boolean;
        showAdjacentMonths: boolean;
        modelValue: Date;
    };
};
export declare const AllowedDatesWithNoAnimation: {
    args: {
        noAnimation: boolean;
        allowedDates: (date: Date) => boolean;
    };
};
export declare const DisabledPreSelectedViewMonth: {
    args: {
        disabled: boolean;
        showAdjacentMonths: boolean;
        viewMonth: Date;
    };
};
