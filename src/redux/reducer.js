import * as CONSTANTS from "./constants";
import produce from "immer";
export const initialState = {
  loading: false,
  data: [],
  error: false
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case CONSTANTS.FETCH_EMPLOYMENTS_REQUEST:
      case CONSTANTS.DELETE_EMPLOYMENTS_REQUEST:
      case CONSTANTS.PUT_EMPLOYMENT_REQUEST:
      case CONSTANTS.ADD_EMPLOYMENTS_REQUEST:
        draft.loading = true;
        break;
      case CONSTANTS.FETCH_EMPLOYMENTS_SUCCESS:
        draft.data = payload;
        draft.loading = false;
        break;
      case CONSTANTS.DELETE_EMPLOYMENTS_SUCCESS:
        draft.data = draft.data.filter(el => el.id !== payload);
        draft.loading = false;
        break;
      case CONSTANTS.ADD_EMPLOYMENTS_SUCCESS:
        draft.data = [...draft.data, payload];
        draft.loading = false;
        break;
      case CONSTANTS.PUT_EMPLOYMENT_SUCCESS:
        draft.data = draft.data.map(el =>
          el.id === payload.id ? { ...el, ...payload } : el
        );
        draft.loading = false;
        break;
      case CONSTANTS.FETCH_EMPLOYMENTS_FAILURE:
      case CONSTANTS.DELETE_EMPLOYMENTS_FAILURE:
      case CONSTANTS.PUT_EMPLOYMENT_FAILURE:
      case CONSTANTS.ADD_EMPLOYMENTS_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case CONSTANTS.CLEAR_ERROR:
        draft.error = false;
        break;
      default:
        return draft;
    }
  });

export default reducer;

