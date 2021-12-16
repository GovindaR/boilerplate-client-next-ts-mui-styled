// import { combineReducers } from "redux";

import { combineReducers } from "@reduxjs/toolkit";
import coreReducer from "../modules/_core/state/coreSlice";
import settingReducer from "../modules/_core/state/settingsSlice";

const rootReducer = combineReducers({
  settings: settingReducer,
  core: coreReducer,
});

export default rootReducer;
