import React, { useEffect, useState, useCallback } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import throttle from "lodash/throttle"
import AceEditor from "react-ace"
import { useNavigate, useParams } from "react-router-dom"
import "ace-builds"
import "ace-builds/webpack-resolver"

import SnippetAPI from "../../api/snippet"
import { setLoadedSnippetId, setSnippetLanguage } from "../../actions/snippet"

const Snippet = (props) => {
  const [code, setCode] = useState("")
  let { snippetId } = useParams()
  let navigate = useNavigate()
  const updateThrottled = useCallback(
    throttle((newValue) => {
    updateSnippet(newValue)
  }, 1000), [])

  useEffect(() => {
    getExistingSnippet(snippetId)
  })

  function createEmptySnippet() {
    SnippetAPI.create(code).then((snippet) => {
      props.setSnippetLanguage(
        snippet.data.attributes.language.id,
        snippet.data.attributes.language.title
      )
      props.setLoadedSnippetId(snippet.data.id)
      navigate(`/${snippet.data.id}`)
    })
  }

  function getExistingSnippet(snippetId) {
    SnippetAPI.get(snippetId)
      .then((snippet) => {
        props.setSnippetLanguage(
          snippet.data.attributes.language.id,
          snippet.data.attributes.language.title
        )
        console.log(`${snippetId}, ${snippet.data.attributes.code}`)
        setCode(snippet.data.attributes.code)

        props.setLoadedSnippetId(snippet.data.id)
      })
      .catch((_err) => {
        createEmptySnippet()
      })
  }

  function updateSnippet(value) {
    SnippetAPI.update(snippetId, {
      code: value,
    }).catch((err) => console.error(err))
  }

  function handleChange(newValue) {
    setCode(newValue)
    updateSnippet(newValue)
  }

  return (
    <AceEditor
      className="code-snippet"
      mode={props.mode}
      theme="tomorrow_night"
      value={code}
      fontSize={18}
      setOptions={{
        enableBasicAutocompletion: true,
        tabSize: 2,
        useSoftTabs: true,
      }}
      width="100%"
      height="calc(100vh - 3em)"
      onChange={updateThrottled}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    mode: state.snippet.mode,
    snippetId: state.snippet.snippetId,
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setLoadedSnippetId: setLoadedSnippetId,
      setSnippetLanguage: setSnippetLanguage,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Snippet)
