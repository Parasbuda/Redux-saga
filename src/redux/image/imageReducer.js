import actionTypes from "./image-action-types"
const INITIAL_STATE = {
  images: [],
  loading: false,
  error: "",
}
const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SUCCESS:
      return {
        ...state,
        images: [...state.images, action.payload],
        loading: false,
      }
    case actionTypes.LOAD:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
export default imageReducer
