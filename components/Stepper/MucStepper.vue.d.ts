import { StepperItem } from './MucStepperTypes';
type __VLS_Props = {
    /**
     * List of items displayed in the stepper
     */
    stepItems: StepperItem[];
    /**
     * Id of the current step item
     */
    activeItem: string;
    /**
     * Disables the previous steps
     */
    disablePreviousSteps?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    changeStep: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChangeStep?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
