export type LangType = "en" | "np";

export interface LabelsType {
  [locale: string]: {
    [key: string]: any; // string | ((...args: any[]) => string)} TS FIXME
  };
}
