export interface ItemAsObject {
  [key: string]: any;
}

/**
 * Different possible types of items
 */
export type MucSelectItemTypes = string | ItemAsObject;

export type ChoiceType = {
  value: string;
  label: string;
  selected: boolean;
  disabled: boolean;
};
