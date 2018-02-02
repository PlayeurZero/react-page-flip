import * as React from 'react'

interface IProps {
  side: string
  children: React.ReactElement<any>
}

interface IState { }

class Side extends React.Component<IProps, IState> {
  public render() {
    const { side, children } = this.props

    return (
      <div
        className={`book-wrapper-page-side book-wrapper-page-side--${side}`}
      >
        {children}
      </div>
    )
  }
}

export { Side as default, IProps, IState }
