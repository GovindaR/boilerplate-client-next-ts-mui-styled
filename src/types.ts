export type LangType = "en" | "jp";

export interface LabelsType {
  [locale: string]: {
    [key: string]: any; // string | ((...args: any[]) => string)} TS FIXME
  };
}
