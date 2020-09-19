import SnippetAPI from "../../api/snippet";

import React from "react";
import "./index.css";
import throttle from "lodash/throttle";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-tomorrow_night";

import "ace-builds/src-noconflict/mode-c_cpp";

// TODO: refactor
// const languages = ['ruby', 'javascript', 'html', 'css'];
// languages.forEach(lang => {
//   require(`ace-builds/src-noconflict/mode-${lang}`)
// });

class Snippet extends React.Component {
  constructor(props) {
    super();

    this.state = {
      id: null,
      code: "",
      mode: "c_cpp",
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
        this.setState({
          id: snippetId,
          code: snippet.data.attributes.code,
        });
      })
      .catch((_err) => {
        this.createEmptySnippet();
      });
  }

  createEmptySnippet() {
    SnippetAPI.create(this.state.code).then((snippet) => {
      this.setState({
        id: snippet.data.id,
      });

      this.props.history.push(`/${this.state.id}`);
    });
  }

  updateSnippet(value) {
    const id = this.state.id;

    SnippetAPI.update(id, value).catch((err) => console.error(err));
  }

  handleChange(newValue) {
    this.setState({ code: newValue });
    this.updateSnippetThrottled(newValue);
  }

  handleModeSelect(event) {
    const mode = event.target.value;

    this.setState({ mode: mode });
  }

  render() {
    return (
      <AceEditor
        className="code-snippet"
        mode={this.state.mode}
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

export default Snippet;
