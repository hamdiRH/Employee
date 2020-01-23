import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectEmployee = (state,id) => state.data.find(el => el.id === Number(id)) || initialState;
export const selectOneEmployes = createSelector([selectEmployee],employe=>employe)
