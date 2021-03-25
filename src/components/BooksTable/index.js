import { useState } from 'react'
import Book from '../Book'
import { Wrapper, HeaderRow, Header, Button } from './styles.js'

const newBookState = {
  name: '',
  description: '',
  author: '',
  count: ''
}

const headers = ['name', 'description', 'author', 'count']

function BooksTable({books}) {
  const [addNewBook, setAddNewBook] = useState()
  const showAddNewBook = () => setAddNewBook(true)
  const hideAddNewBook = () => setAddNewBook(false)
  const renderHeaders = headers.map(header => <Header key={header}>{header}</Header>)
  const renderBooks = books.map(book => <Book key={book.id} book={book} headers={headers} />)
  if(addNewBook) {
    const lastBook = books[books.length - 1]
    newBookState.id = lastBook ? lastBook.id + 1 : 1
  }
  return (
      <Wrapper>
        <Button onClick={showAddNewBook}>Add New Book</Button>
        {addNewBook ? <Book book={newBookState} headers={headers} isAdd onSave={hideAddNewBook} onRemove={hideAddNewBook} /> : null}
        <HeaderRow>
          {renderHeaders}
          <Header>Actions</Header>
        </HeaderRow>
        {renderBooks}
      </Wrapper>
  )
}

export default BooksTable;
