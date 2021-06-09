import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';


import './App.css';

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
      getBooks();
    }, []) //use only once! at load
  // TODO - GET Book List from server

  const getBooks = () => {
    axios.get('/books')
    .then(response => {
      //response.data --> results.rows from SQL
      //where we send data to redux
      dispatch({
        type: 'SET_BOOKS',
        payload: response.data
      })
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm getBooks={getBooks} />
        <BookList />
      </main>
    </div>
  );
}

export default App;