import { StepperItem } from './MucStepperTypes';
declare const _default: import('vue').DefineComponent<{
    /**
     * List of items displayed in the stepper
     */
    stepItems: StepperItem[];
    /**
     * Id of the current step item
     */
    activeItem: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    changeStep: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<{
    /**
     * List of items displayed in the stepper
     */
    stepItems: StepperItem[];
    /**
     * Id of the current step item
     */
    activeItem: string;
}> & Readonly<{
    onChangeStep?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
