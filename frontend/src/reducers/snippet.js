import {
  SNIPPET_LOADED,
  SET_SNIPPET_LANGUAGE,
  CHANGE_SNIPPET_LANGUAGE
} from "../constants/action_types/snippet"

const initialState = {
  mode: "text",
  modeId: -1,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SNIPPET_LANGUAGE:
    case CHANGE_SNIPPET_LANGUAGE:
      return {
        ...state,
        mode: action.mode,
        modeId: action.modeId
      }
    case SNIPPET_LOADED:
      return {
        ...state,
        snippetId: action.snippetId
      }
    default:
      return state
  }
}
