import React from 'react';
import GoogleBook from './GoogleBook';
import SearchForm from './SearchForm';
import axios from 'axios';

class GoogleBooks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            googleBooks: [
            ]
        };
    }

    // Scrape all the googleBooks on mount
    componentDidMount() {
        // Call node to scrape
        // const APIKEY = "AIzaSyBwoRAwXiNOlsYZjRt6lhmjc9d0s3i3Wl0";
        // const URL =`https://www.googleapis.com/books/v1/volumes?q=lowers+inauthor:keyes&key=${APIKEY}`;
        // axios.get(`${URL}`)
        // .then(res => {
        //     const bookData = [...res.data.items];
        //     const googleBooks = [];
        //     bookData.forEach(bookInfo => {
        //         let book = {};                // stringify split array to string
        //         book.title = bookInfo.volumeInfo.title;
        //         book.authors = bookInfo.volumeInfo.authors ? bookInfo.volumeInfo.authors.join(", ") : "";
        //         book.description = bookInfo.volumeInfo.description;
        //         book.imageUrl = bookInfo.volumeInfo.imageLinks ? bookInfo.volumeInfo.imageLinks.thumbnail : "";
        //         book.url = bookInfo.volumeInfo.infoLink;
        //         googleBooks.push(book);
        //     })
        //     this.setState({ googleBooks: googleBooks });
        // })
        // .catch(err => {
        //     console.error(err); 
        // });
    }
    // Scrape all the googleBooks on mount
    searchBook = (searchTerm) => {
        // Call node to scrape
        const APIKEY = "AIzaSyBwoRAwXiNOlsYZjRt6lhmjc9d0s3i3Wl0";
        const URL =`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${APIKEY}`;
        axios.get(`${URL}`)
        .then(res => {
            const bookData = [...res.data.items];
            const googleBooks = [];
            
            bookData.forEach(bookInfo => {
                let book = {};                // stringify split array to string
                book.title = bookInfo.volumeInfo.title;
                book.authors = bookInfo.volumeInfo.authors ? bookInfo.volumeInfo.authors.join(", ") : "";
                book.description = bookInfo.volumeInfo.description;
                book.imageUrl = bookInfo.volumeInfo.imageLinks ? bookInfo.volumeInfo.imageLinks.thumbnail : "";
                book.url = bookInfo.volumeInfo.infoLink;
                googleBooks.push(book);
            });
            this.setState({ googleBooks: googleBooks });
        })
        .catch(err => {
            console.error(err); 
        });
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <SearchForm searchBook={this.searchBook}/>
                </div>
                <div className="row">
                {this.state.googleBooks.map((book, i) => {
                    return(
                        <div key={i} className="col s12 m12 l12">
                            <GoogleBook 
                            key={i}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            imageUrl={book.imageUrl}
                            url={book.url}
                            />
                        </div>
                        );
                })}
                </div>
            </div>
        );
    }
}

export default GoogleBooks;