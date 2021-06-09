import {useState} from 'react';
import axios from 'axios';
import logger from 'redux-logger';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {TextField} from '@material-ui/core';


function BookForm({getBooks}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding book`, {title, author});

    // TODO - axios request to server to add book
    axios.post('/books', {title, author})
    .then(response => {
      //clear inputs
      setTitle('');
      setAuthor('');
      //get
      getBooks();
    }).catch(error => {
      console.log(error);
    })

  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <TextField
          required 
          placeholder="Title" 
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <TextField 
          required 
          placeholder="Author" 
          variant="outlined"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <Button endIcon={<CloudUploadIcon />} 
        variant="outlined" 
         
        type="submit">
          Add Book
        </Button>
      </form>
    </section>
  );
}

export default BookForm;