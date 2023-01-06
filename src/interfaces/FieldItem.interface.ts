export type Option = {
  label: string;
  value: string;
};

export interface FieldItem {
  type: string;
  label: string;
  name?: string;
  required?: boolean;
  options?: Array<Option>;
}
