import * as React from 'react'

interface IProps {
  page?: number,
  active?: boolean,
  flipped?: boolean,
  onClick?: ({ }: { page: number }) => void,
  children: Array<React.ReactElement<any>>,
}

interface IState { }

class Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  private handleClick() {
    const { page, active, onClick } = this.props

    onClick({ page })
  }

  public render() {
    const { active, flipped, children } = this.props

    return (
      <div
        className={`book-wrapper-page${active ? ' is-active' : ''}${flipped ? ' is-flipped' : ''}`}
        onClick={this.handleClick}
      >
        {
          React.Children.map(
            children,
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
