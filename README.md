# React page flip

A react components that renders a book with pages you can flip.

## Install

```bash
npm install github:playeurzero/react-page-flip
```

### Install a specific version

```bash
npm install github:playeurzero/react-page-flip#v1.0.0
```

## Demonstration

```bash
npm run storybook:run
```

Then open http://localhost:8000 in your favorite browser.

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Book from 'react-page-flip'

ReactDOM.render(
  <Book>
    <Book.Page>
      <Book.Side>Front page</Book.Side>
      <Book.Side>Back page</Book.Side>
    </Book.Page>

    <Book.Page>
      <Book.Side>Another front page</Book.Side>
      <Book.Side>And the back page</Book.Side>
    </Book.Page>
  </Book>,
  document.querySelector('#app')
)
```

## Description

### \<Book> props

#### width

`number?` = `1080`

The width of the book.

#### height

`number?` = `640`

The height of the book.

#### children

`React.ReactNode`

It contains all `<Book.Page>`.

#### onFlipPage

`(page: number)?` = `() => {}`

### \<Book.Page> props

#### children

`React.ReactNode`

It contains two `<Book.Side>`.

### \<Book.Side> props

#### children

`React.ReactNode`

The content of the page side.

## License

[MIT licensed](LICENSE)
