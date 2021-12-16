import { LangType } from "../../../../types";

// declaring the types for our state
type state = {
  rtl: boolean;
  lang: LangType;
  locale: LangType;
  darkTheme: boolean;
};
const initialState: state = {
  rtl: false,
  lang: "en",
  locale: "en",
  darkTheme: false,
};
export default initialState;
