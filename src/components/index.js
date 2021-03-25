import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import BooksTable from './BooksTable'

const filterBookConditions = (book, _query) => {
  const query = _query.toLowerCase()
  return book.name?.toLowerCase().includes(query) || book.description?.toLowerCase().includes(query) || book.author?.toLowerCase().includes(query)
}

const InputBox = styled.input`
  padding: 5px 0;
  border: 1px solid black;
  outline: none;
  margin-bottom: 10px;
`

function App() {
  const books = useSelector(state => state.books.items)
  const [query, setQuery] = useState('')
  useEffect(() => {
    setBooks(books)
    setQuery('')
  }, [books])
  const [_books, setBooks] = useState(books)
  const filterBooks = (event) => {
    const value = event.target.value
    const filtered = value === '' ? books : books.filter(book => filterBookConditions(book, value))
    setBooks(filtered)
    setQuery(value)
  }
  return (
    <div>
      <h1>Library</h1>
      Search: <InputBox value={query} onChange={filterBooks} />
      <BooksTable books={_books} />
    </div>
  );
}

export default App;
