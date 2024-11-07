import { StepperItem } from './MucStepperTypes';
declare const _default: import('vue').DefineComponent<{
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
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<{
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
}> & Readonly<{
    onClick?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
