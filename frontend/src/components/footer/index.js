import React from 'react'
import './index.css'

import LanguageSelect from '../language_select'

class Footer extends React.Component {
  render() {
    return (
      <footer>
          <ul className='footer-nav'>
            <li>
              <a className='footer-action create-new' href='/' target='_blank'>
                CREATE NEW
              </a>
            </li>

            <li>
              <LanguageSelect />
            </li>

            <li>
                <a className='copyright' target="_blank"
                  href="https://github.com/vladyio"
                  rel="noopener noreferrer">
                  &copy; Vladislav Andreev
                </a>
            </li>
          </ul>
        </footer>
    )
  }
}

export default Footer