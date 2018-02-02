import Book, { IProps as BookProps } from './components/Book'
import Page, { IProps as PageProps } from './components/Book/Page'
import Side, { IProps as SideProps } from './components/Book/Page/Side'

import './style.css'

const EXPORT = Object.assign(Book, {
  Page: Object.assign(Page, {
    Side,
  }),
})

interface IBookDecorator extends React.ComponentClass<BookProps> {
  Page: IPageDecorator
}

interface IPageDecorator extends React.ComponentClass<PageProps> {
  Side: ISideDecorator
}

interface ISideDecorator extends React.ComponentClass<SideProps> { }

export default EXPORT as IBookDecorator
