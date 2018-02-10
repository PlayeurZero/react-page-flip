import * as React from 'react'
import { mount } from 'enzyme'

import Book from '../'

describe('<Book />', () => [
  it('renders <Book /> with 4 pages', () => {
    const wrapper = mount((
      <Book>
        <Book.Page>
          <Book.Side>
            page #1
          </Book.Side>

          <Book.Side>
            page #2
          </Book.Side>
        </Book.Page>

        <Book.Page>
          <Book.Side>
            page #3
          </Book.Side>

          <Book.Side>
            page #4
          </Book.Side>
        </Book.Page>
      </Book>
    ))

    expect(wrapper.prop('width')).toBe(1080) // default value
    expect(wrapper.prop('height')).toBe(640) // default value
  }),
])
