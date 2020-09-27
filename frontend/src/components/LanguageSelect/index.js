import React from 'react'
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuButton
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
import { FiChevronDown } from 'react-icons/fi';

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

  handleChange = (event, id, title) => {
    this.props.changeSnippetLanguage(id, title)
    SnippetAPI.update(this.props.snippetId, { language_id: id })
  }

  languageTitleById = (id) => {
    return this.state.languages.find(lang => lang[0] === id)[1]
  }

  render() {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}
                    colorScheme="teal" variant="outline">
          {this.props.mode}
        </MenuButton>
          <MenuList>
            {
              this.state.languages.map(([id, title]) => {
                return (
                  <MenuItem key={title} onClick={(e) => this.handleChange(e, id, title)}>
                    {title}
                  </MenuItem>
                )
              })
            }
          </MenuList>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modeId: state.snippet.modeId,
    mode: state.snippet.mode,
    snippetId: state.snippet.snippetId
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeSnippetLanguage: changeSnippetLanguage,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect)
