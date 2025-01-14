import { MucSelectItemTypes } from './MucSelectTypes';
type __VLS_Props = {
    /**
     * List of items to be available
     */
    items: MucSelectItemTypes[];
    /**
     * Optional label shown above the input
     */
    label?: string;
    /**
     * Optional hint shown below the input
     */
    hint?: string;
    /**
     * Allow multiple selectable items
     */
    multiple?: boolean;
    /**
     * Optional message shown no item is found after filtering
     */
    noItemFoundMessage?: string;
    /**
     * Property that contains the value to be displayed in the list when a list of objects is used
     */
    itemTitle?: string;
};
type __VLS_PublicProps = {
    "modelValue"?: MucSelectItemTypes | MucSelectItemTypes[];
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: MucSelectItemTypes | MucSelectItemTypes[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: MucSelectItemTypes | MucSelectItemTypes[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    selectComponent: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
