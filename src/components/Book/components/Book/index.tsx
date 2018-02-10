import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Page from '../Page'

interface IProps {
  width?: string | number
  height?: string | number
  children: React.ReactNode
}

interface IState {
  currentPage: number
}

class Book extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    width: 1080,
    height: 640,
  }

  private $nodes: any = {}

  constructor(props: IProps) {
    super(props)

    this.state = {
      currentPage: 0,
    }

    this.handleClick = this.handleClick.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  public componentDidMount() {
    const $book = this.$nodes.book

    $book.addEventListener('swipeleft', this.nextPage)
    $book.addEventListener('swiperight', this.previousPage)
  }

  public componentWillUnmount() {
    const $book = this.$nodes.book

    $book.removeEventListener('swipeleft', this.nextPage)
    $book.removeEventListener('swiperight', this.previousPage)
  }

  private handleClick({ page }: { page: number }) {
    const { currentPage } = this.state

    if (page < currentPage) {
      this.previousPage()
    } else {
      this.nextPage()
    }
  }

  private getPageCount() {
    return React.Children.count(this.props.children)
  }

  private nextPage() {
    const { currentPage } = this.state

    if (currentPage === this.getPageCount()) {
      return
    }

    this.setState({ currentPage: currentPage + 1 })
  }

  private previousPage() {
    const { currentPage } = this.state

    if (currentPage === 0) {
      return
    }

    this.setState({ currentPage: this.state.currentPage - 1 })
  }

  public render() {
    const { width, height, children }: IProps = this.props
    const { currentPage } = this.state

    return (
      <div
        className="book"
        style={{ width, height }}
        ref={($node) => { this.$nodes.book = $node }}
      >
        <div className="book-wrapper">
          {
            React.Children.map(
              children,
              (child, index) => (
                React.cloneElement(
                  child as React.ReactElement<any>,
                  {
                    active: index === currentPage,
                    flipped: index < currentPage,
                    onClick: this.handleClick,
                    page: index,
                  },
                )
              ),
            )
          }
        </div>
      </div>
    )
  }
}

export { Book as default, IProps, IState }
