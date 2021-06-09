import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/roboto';

import './App.css';


const theme = createMuiTheme({
  pallete: {
    primary: {
      main: '#004d40'
    },
    secondary: {
      main: '#d4e157'
    }
  }
})

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
    <ThemeProvider theme={theme}>
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm getBooks={getBooks} />
        <BookList />
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;