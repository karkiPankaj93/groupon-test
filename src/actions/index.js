import { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './types';

export const fetchBooks = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(books =>
        dispatch({
          type: FETCH_BOOKS,
          payload: books
        })
      );
};

export const addBook = (payload) => dispatch => {
  dispatch({
    type: ADD_BOOK,
    payload
  })
}

export const updateBook = (payload) => dispatch => {
  dispatch({
    type: UPDATE_BOOK,
    payload
  })
}

export const deleteBook = (payload) => dispatch => {
  dispatch({
    type:DELETE_BOOK,
    payload
  })
}