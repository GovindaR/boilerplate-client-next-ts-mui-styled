import { LangType } from "../types";
import { translations as coreLabels } from "./_core/labels";
import { translations as privacyPolicyLabels } from "./module/labels/privacyPolicy";

export const labels = (locale: LangType) => {
  let allLabels = {
    ...coreLabels?.[locale],
    ...privacyPolicyLabels?.[locale],
  };

  return allLabels;
};
