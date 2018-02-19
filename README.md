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

## License

[MIT licensed](LICENSE)
