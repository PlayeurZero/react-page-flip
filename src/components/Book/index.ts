import * as React from 'react'

import Book, { IProps as IBookProps } from './components/Book'
import Page, { IProps as IPageProps } from './components/Page'
import Side, { IProps as ISideProps } from './components/Side'

interface IBookDecorator extends React.ComponentClass<IBookProps> {
  Page: React.ComponentClass<IPageProps>
  Side: React.ComponentClass<ISideProps>
}

export default Object.assign(Book, { Page, Side }) as IBookDecorator
