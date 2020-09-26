import {
  SNIPPET_LOADED,
  CHANGE_SNIPPET_LANGUAGE,
  SET_SNIPPET_LANGUAGE
} from "../constants/action_types/snippet";

export const setLoadedSnippetId = (snippetId) => ({
  type: SNIPPET_LOADED,
  snippetId: snippetId
})

export const setSnippetLanguage = (modeId, modeTitle) => ({
  type: SET_SNIPPET_LANGUAGE,
  mode: modeTitle,
  modeId: modeId
})

export const changeSnippetLanguage = (modeId, modeTitle) => ({
  type: CHANGE_SNIPPET_LANGUAGE,
  mode: modeTitle,
  modeId: modeId
})
