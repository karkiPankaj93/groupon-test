import _ from 'lodash'
import { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from '../actions/types';

const initialState = {
  items: [{
        id: 1,
        name: "Harry Potter",
        description: "fiction",
        author: "J. K. Rolling",
        count: "10"
    }]
};

export default function(state = initialState, action) {
  const books = [...state.items]
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_BOOK:
      books.push(action.payload)
      return {
        ...state,
        items: books
      };
    case UPDATE_BOOK:
      const updateIndex = _.findIndex(books, book => book.id === action.payload.id)
      books[updateIndex] = action.payload
      return {
        ...state,
        items: books
      };
    case DELETE_BOOK:
      const removeIndex = _.findIndex(books, book => book.id === action.payload.id)
      if(removeIndex !== -1) books.splice(removeIndex, 1)
      return {
        ...state,
        items: books
      };
    default:
      return state;
  }
}