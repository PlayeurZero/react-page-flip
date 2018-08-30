import * as React from 'react'

import { classConcat } from '../../../../libraries/utils'

import * as classes from './styles.css'

interface IProps {
  page?: number,
  active?: boolean,
  flipped?: boolean,
  onClick?: ({ }: { page: number }) => void,
  children: React.ReactNode,
}

interface IState { }

class Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  private handleClick() {
    this.props.onClick({ page: this.props.page })
  }

  public render() {
    return (
      <div
        className={classConcat(
          classes['book-wrapper-page'],
          {
            [classes['is-active']]: this.props.active,
            [classes['is-flipped']]: this.props.flipped,
          },
        )}
        onClick={this.handleClick}
      >
        {
          React.Children.map(
            this.props.children,
            (child, index) =>
              React.cloneElement(
                child as React.ReactElement<any>,
                { side: index % 2 === 0 ? 'front' : 'back' },
              ))
        }
      </div>
    )
  }
}

export { Page as default, IProps, IState }
