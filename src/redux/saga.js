import { takeEvery, put, all, call } from "redux-saga/effects";
import * as api from "./service";
import * as CONSTANTS from "./constants";

export function* fetchEmployments() {
  
  try {
    const data = yield call(api.fetchEmployments);
    yield put({
      type: CONSTANTS.FETCH_EMPLOYMENTS_SUCCESS,
      payload: data.employee
    });
  } catch (e) {
    yield put({ type: CONSTANTS.FETCH_EMPLOYMENTS_FAILURE, e });
  }
}

export function* deleteEmployments(action) {
  try {
    yield call(() => api.deleteEmployments(action.id));
    yield put({
      type: CONSTANTS.DELETE_EMPLOYMENTS_SUCCESS,
      payload: action.id
    });
  } catch (e) {
    yield put({ type: CONSTANTS.DELETE_EMPLOYMENTS_FAILURE, e });
  }
}

export function* addEmployment(action) {
  if (Object.entries(action.newEmploye).length === 1)
    return yield put({ type: CONSTANTS.ADD_EMPLOYMENTS_FAILURE });
  try {
    const data = yield call(() => api.addEmployment(action.newEmploye));
    yield put({
      type: CONSTANTS.ADD_EMPLOYMENTS_SUCCESS,
      payload: data
    });
  } catch (e) {
    yield put({ type: CONSTANTS.ADD_EMPLOYMENTS_FAILURE, e });
  }
}

export function* updateEmployments(action) {
  if (Object.entries(action.updatedContact).length === 1)
    return yield put({ type: CONSTANTS.PUT_EMPLOYMENT_FAILURE });

  try {
    const data = yield call(() =>
      api.updateEmployments(action.id, action.updatedContact)
    );
    yield put({
      type: CONSTANTS.PUT_EMPLOYMENT_SUCCESS,
      payload: data
    });
  } catch (e) {
    yield put({ type: CONSTANTS.PUT_EMPLOYMENT_FAILURE, e });
  }
}
export function* fetchEmploymentsWatcher() {
  yield takeEvery(CONSTANTS.FETCH_EMPLOYMENTS_REQUEST, fetchEmployments);
}
export function* deleteEmploymentsWatcher() {
  yield takeEvery(CONSTANTS.DELETE_EMPLOYMENTS_REQUEST, deleteEmployments);
}
export function* addEmploymentsWatcher() {
  yield takeEvery(CONSTANTS.ADD_EMPLOYMENTS_REQUEST, addEmployment);
}
export function* updateEmploymentsWatcher() {
  yield takeEvery(CONSTANTS.PUT_EMPLOYMENT_REQUEST, updateEmployments);
}
export default function* employmentSaga() {
  yield all([
    fetchEmploymentsWatcher(),
    deleteEmploymentsWatcher(),
    addEmploymentsWatcher(),
    updateEmploymentsWatcher()
  ]);
}


