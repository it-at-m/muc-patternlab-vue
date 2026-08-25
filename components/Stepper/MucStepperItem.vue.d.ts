import { StepperItem } from './MucStepperTypes';
type __VLS_Props = {
    /**
     * Individual item to display inside the MucStepper component
     */
    item: StepperItem;
    /**
     * Show stepper as active
     */
    isActive: boolean;
    /**
     * Show stepper as done
     */
    isDone: boolean;
    /**
     * Disabled stepper
     */
    disabled: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
export default _default;
