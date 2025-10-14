type buttonType = "primary" | "secondary" | "ghost" | "icon";
type __VLS_Props = {
    /**
     * The variant prop gives you easy access to several different button styles.
     *
     * Available are `primary`, `secondary` and `ghost`.
     */
    variant?: buttonType;
    /**
     * Lets you indicate that the button is not currently interactive or clickable.
     */
    disabled?: boolean;
    /**
     * Choose an icon to be appended behind the slot. No icon will be placed if the prop is left empty.
     */
    icon?: string;
    /**
     * Whether the Icon should be animated on hover (slide-right) or not.
     *
     * Default is `false`
     */
    iconAnimated?: boolean;
    /**
     * Wether the Icon should spin when the button is clicked (used e.g. when building a "copy"-Button)
     *
     * Default is 'false';
     */
    spinIconOnClick?: boolean;
    /**
     * Whether the Icon should be shown on the left side of the button (slide-right) or not.
     *
     * Default is `false`
     */
    iconShownLeft?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /**
         * Display content inside the button.
         */
        default(): unknown;
    }> & {
        /**
         * Display content inside the button.
         */
        default(): unknown;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (value: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((value: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
