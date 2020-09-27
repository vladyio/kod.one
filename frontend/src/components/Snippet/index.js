import React from "react";
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux'
import throttle from "lodash/throttle";
import AceEditor from "react-ace"
import "ace-builds"
import "ace-builds/webpack-resolver"

import SnippetAPI from "../../api/snippet";
import { setLoadedSnippetId, setSnippetLanguage } from "../../actions/snippet";
import "./index.css";

class Snippet extends React.Component {
  constructor() {
    super();

    this.state = {
      code: "",
    };

    this.updateSnippet = this.updateSnippet.bind(this);
    this.updateSnippetThrottled = throttle(this.updateSnippet, 1000);
  }

  componentDidMount() {
    const snippetId = this.props.match.params.snippetId;
    this.getExistingSnippet(snippetId);
  }

  getExistingSnippet(snippetId) {
    SnippetAPI.get(snippetId)
      .then((snippet) => {
        this.props.setSnippetLanguage(
          snippet.data.attributes.language.id,
          snippet.data.attributes.language.title
        )

        this.setState({
          code: snippet.data.attributes.code,
        });
        this.props.setLoadedSnippetId(snippet.data.id);
      })
      .catch((_err) => {
        this.createEmptySnippet();
      });
  }

  createEmptySnippet() {
    SnippetAPI.create(this.state.code).then((snippet) => {
      this.props.setSnippetLanguage(
        snippet.data.attributes.language.id,
        snippet.data.attributes.language.title
      )
      this.props.setLoadedSnippetId(snippet.data.id);
      this.props.history.push(`/${snippet.data.id}`);
    });
  }

  updateSnippet(value) {
    const id = this.props.snippetId
    SnippetAPI.update(id, { code: value }).catch((err) => console.error(err));
  }

  handleChange(newValue) {
    this.setState({ code: newValue });
    this.updateSnippetThrottled(newValue);
  }

  render() {
    return (
      <AceEditor
        className="code-snippet"
        mode={this.props.mode}
        theme="tomorrow_night"
        value={this.state.code}
        fontSize={18}
        setOptions={{
          enableBasicAutocompletion: true,
          tabSize: 2,
          useSoftTabs: true,
        }}
        width="100%"
        height="calc(100vh - 3em)"
        onChange={(newValue) => this.handleChange(newValue)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.snippet.mode,
    snippetId: state.snippet.snippetId
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setLoadedSnippetId: setLoadedSnippetId,
  setSnippetLanguage: setSnippetLanguage,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
