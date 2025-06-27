export type ItemAsObject = Record<string, unknown>;

/**
 * Different possible types of items
 */
export type MucSelectItemTypes = string | ItemAsObject;

export interface ChoiceType {
  value: string;
  label: string;
  selected: boolean;
  disabled: boolean;
}
