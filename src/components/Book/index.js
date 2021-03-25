import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from '../../actions/types.js'
import { Wrapper, Field, InputBox, TextBox, DataFields, ButtonGroup, Button } from './styles.js'

function Book({book, headers, onSave, onRemove, isAdd}) {
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(isAdd)
  const [_book, setBook] = useState(book)
  useEffect(() => {
    setBook(book)
  }, [book])
  const setBookField = (event) => {
    const { name, value } = event.target
    const newBook = {..._book}
    newBook[name] = value
    setBook(newBook)
  }
  const saveBook = () => {
    if(!(_book.name && _book.count)) return
    const type = isAdd ? ADD_BOOK : UPDATE_BOOK
    dispatch({ type, payload: _book })
    setIsEdit(false)
    onSave && onSave()
  }
  const removeBook = () => {
    dispatch({ type: DELETE_BOOK, payload: _book })
    onRemove && onRemove()
  }
  return (
      <Wrapper>
        <DataFields>
          {headers.map(header => (
            <Field key={header} isAdd>
              {isEdit ? <InputBox placeholder={header} name={header} value={_book[header]} onChange={setBookField}  /> : <TextBox>{_book[header]}</TextBox>}
            </Field>
          ))}
          <Field>
            <ButtonGroup>
              {isAdd ? null : <Button onClick={() => setIsEdit(true)}>Edit</Button>}
              <Button onClick={saveBook}>Save</Button>
              <Button onClick={removeBook}>Delete</Button>
            </ButtonGroup>
          </Field>
        </DataFields>
      </Wrapper>
  )
}

export default Book;
