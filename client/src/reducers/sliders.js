import {
  CREATE_SLIDER,
  DELETE_SLIDER,
  EDIT_SLIDER,
  GET_SLIDERS,
} from "../constants/actionTypes";

export default (sliders = [], action) => {
  switch (action.type) {
    case GET_SLIDERS:
      return action.payload;
    case CREATE_SLIDER:
      return [...sliders, action.payload];
    case EDIT_SLIDER:
      return sliders.map((s) =>
        s._id === action.payload._id ? action.payload : s
      );
    case DELETE_SLIDER:
      return sliders.filter((s) => s._id !== action.payload);
    default:
      return sliders;
  }
};
