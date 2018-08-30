import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Book from '../'

storiesOf('Data display/Book', module).add('basic usage', () => {
  return (
    <Book>
      <Book.Page>
        <Book.Side>
          Page #1
        </Book.Side>

        <Book.Side>
          Page #2
        </Book.Side>
      </Book.Page>

      <Book.Page>
        <Book.Side>
          Page #3
        </Book.Side>

        <Book.Side>
          Page #4
        </Book.Side>
      </Book.Page>
    </Book>
  )
})
