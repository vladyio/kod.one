import React from 'react'
import './index.css'

import LanguageAPI from '../../api/language'

class LanguageSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      languages: [],
      selected: null
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

  handleChange(event) {
    const value = event.target.value

    this.setState({ selected: value })
  }

  render() {
    return (
      <select onChange={this.handleChange}>
        {this.state.languages.map(([id, title]) => {
          return (
            <option key={title} value={id}>{title}</option>
          )
        })}
      </select>
    )
  }
}

export default LanguageSelect