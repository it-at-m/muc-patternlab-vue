type buttonType = "primary" | "secondary" | "ghost";
declare function __VLS_template(): {
    slots: Readonly<{
        /**
         * Display content inside the button.
         */
        default(): any;
    }> & {
        /**
         * Display content inside the button.
         */
        default(): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    /**
     * The variant prop gives you easy access to several different button styles.
     *
     * Available are `primary`, `secondary` and `ghost`.
     */
    variant?: buttonType;
    /**
     * Let`s you indicate that the button is not currently interactive or clickable.
     */
    disabled?: boolean;
    /**
     * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
     */
    icon?: string;
    /**
     * Wether the Icon should be animated on hover (slide-right) or not.
     *
     * Default is `false`
     */
    iconAnimated?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<{
    /**
     * The variant prop gives you easy access to several different button styles.
     *
     * Available are `primary`, `secondary` and `ghost`.
     */
    variant?: buttonType;
    /**
     * Let`s you indicate that the button is not currently interactive or clickable.
     */
    disabled?: boolean;
    /**
     * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
     */
    icon?: string;
    /**
     * Wether the Icon should be animated on hover (slide-right) or not.
     *
     * Default is `false`
     */
    iconAnimated?: boolean;
}> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    variant: buttonType;
    disabled: boolean;
    iconAnimated: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
