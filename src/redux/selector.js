import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectEmployee = (state,id) => state.data.find(el => el.id === +id) || initialState;
export const selectOneEmployes = createSelector([selectEmployee],employe=>employe)




// export const makeSelectEmployes =  createSelector([selectEmployes], (substate,id) => substate.data.find(el => el.id == id));

// const getOneEmploye = id =>
//   createSelector(selectEmployes, substate => ({
//     substate: substate.data.find(el => el.id == id)
//   }));
// export default makeSelectEmployes;
// export { selectEmployes, getOneEmploye };
