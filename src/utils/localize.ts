import { useSelector } from "react-redux";

import { LangType } from "../types";
import { labels } from "../modules/labels";
import { RootState } from "../state/store";

interface LabelsType {
  [key: string]: any; // string | ((...args: any[]) => string)} TS_FIX_ME
}

export function getLabels(locale: LangType) {
  return labels(locale || "en") as LabelsType;
}

export function useLabels() {
  const locale = useSelector((state: RootState) => state.settings.locale);
  return getLabels(locale);
}

export function getLocalizeLabel(locale: LangType, text: string) {
  return getLabels(locale)?.[text] || getLabels("en")?.[text] || "";
}

export function useLocalizeLabel(text: string) {
  const locale = useSelector((state: RootState) => state.settings.locale);
  // Return localize text and fallback to English
  return getLabels(locale)?.[text] || getLabels("en")?.[text] || "";
}
