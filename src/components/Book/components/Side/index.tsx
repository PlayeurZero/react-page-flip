import * as React from 'react'
import { classConcat } from '../../../../libraries/utils'

import * as classes from './styles.css'

interface IProps {
  side?: string
  children: React.ReactNode
}

interface IState { }

class Side extends React.Component<IProps, IState> {
  public render() {
    return (
      <div
        className={classConcat(
          classes['book-wrapper-page-side'],
          classes[`book-wrapper-page-side--${this.props.side}`],
        )}
      >
        {this.props.children}
      </div>
    )
  }
}

export { Side as default, IProps, IState }
