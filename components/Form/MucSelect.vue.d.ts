import { MucSelectItemTypes } from './MucSelectTypes';
declare let __VLS_typeProps: {
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
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: MucSelectItemTypes | MucSelectItemTypes[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: MucSelectItemTypes | MucSelectItemTypes[]) => any) | undefined;
}>, {
    multiple: boolean;
    noItemFoundMessage: string;
    itemTitle: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
