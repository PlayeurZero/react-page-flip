import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as classes from './styles.css'

interface IProps {
  width?: string | number
  height?: string | number
  children: React.ReactNode
  onFlipPage?: (page: number) => void
}

interface IState {
  currentPage: number
}

class Book extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    width: 1080,
    height: 640,
    onFlipPage() { return },
  }

  private $nodes: any = {
    book: React.createRef(),
  }

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
    const $book = this.$nodes.book.current

    $book.addEventListener('swipeleft', this.nextPage)
    $book.addEventListener('swiperight', this.previousPage)
  }

  public componentWillUnmount() {
    const $book = this.$nodes.book.current

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

    this.setPage(currentPage + 1)
  }

  private previousPage() {
    const { currentPage } = this.state

    if (currentPage === 0) {
      return
    }

    this.setPage(currentPage - 1)
  }

  private setPage(page) {
    this.setState({ currentPage: page })

    this.props.onFlipPage(page)
  }

  public render() {
    const { width, height, children }: IProps = this.props
    const { currentPage } = this.state

    return (
      <div
        className={classes['book']}
        style={{ width, height }}
        ref={this.$nodes.book}
      >
        <div className={classes['book-wrapper']}>
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
