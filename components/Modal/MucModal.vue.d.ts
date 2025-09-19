declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * Title slot of the Dialog
         */
        title(): unknown;
        /**
         * Inner body of the dialog.
         */
        body(): unknown;
        /**
         * Row beneath the body to house muc-buttons.
         */
        buttons(): unknown;
        /**
         * Lowest row in the modal, color seperated section to have actions for the user displayed.
         */
        actions(): unknown;
    }> & {
        /**
         * Title slot of the Dialog
         */
        title(): unknown;
        /**
         * Inner body of the dialog.
         */
        body(): unknown;
        /**
         * Row beneath the body to house muc-buttons.
         */
        buttons(): unknown;
        /**
         * Lowest row in the modal, color seperated section to have actions for the user displayed.
         */
        actions(): unknown;
    };
    refs: {
        dialogRef: HTMLDialogElement;
    };
    rootEl: HTMLDialogElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    open: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    dialogRef: HTMLDialogElement;
}, HTMLDialogElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
