import React from 'react'
import {
  Select
} from "@chakra-ui/core"
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux'

import './index.css'
import LanguageAPI from '../../api/language'
import {
  changeSnippetLanguage
} from "../../actions/snippet";
import SnippetAPI from '../../api/snippet';

class LanguageSelect extends React.Component {
  constructor(props) {
    super()
    this.state = {
      languages: [],
    }
  }

  componentDidMount() {
    LanguageAPI.all().then(languages => {
      this.setState({
        languages: languages.data.map(lang => {
          return [lang.id, lang.attributes.title]
        })
      })
    })
  }

  handleChange = (event) => {
    const value = event.target.value
    this.props.changeSnippetLanguage(value, this.languageTitleById(value))
    SnippetAPI.update(this.props.snippetId, { language_id: value })
  }

  languageTitleById = (id) => {
    return this.state.languages.find(lang => lang[0] === id)[1]
  }

  render() {
    return (
      <Select onChange={this.handleChange} value={this.props.modeId} backgroundColor='#333' color='white' width='10%'>
        {this.state.languages.map(([id, title]) => {
          return (
            <option key={title} value={id}>{title}</option>
          )
        })}
      </Select>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modeId: state.snippet.modeId,
    snippetId: state.snippet.snippetId
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeSnippetLanguage: changeSnippetLanguage,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect)
