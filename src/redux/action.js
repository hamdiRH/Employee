import * as CONSTANTS from "./constants";

export function fetchEmployments() {
  return {
    type: CONSTANTS.FETCH_EMPLOYMENTS_REQUEST
  };
}
export function addEmployment(newEmploye) {
  return {
    type: CONSTANTS.ADD_EMPLOYMENTS_REQUEST,
    newEmploye
  };
}
export function updateEmployment(id,updatedContact ) {
 return {
   type: CONSTANTS.PUT_EMPLOYMENT_REQUEST,id,updatedContact
 }
}

export function deleteEmployments(id) {
  return {
    type: CONSTANTS.DELETE_EMPLOYMENTS_REQUEST,
    id
  };
}

export function clearError(){
  return {type:CONSTANTS.CLEAR_ERROR}
}
