import React from 'react';
import Book from "./Book";
import axios from "axios";

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [
            ]
        };
    }

    refreshPage = () => {
        // Call node to scrape
        axios.get(`/api/books`)
        .then(res => {
            const books = [...res.data];
            this.setState({ books: books });
        })
        .catch(err => {
            console.error(err); 
        });        
    };

    deleteBook = (_id) => {
        axios.post(`/api/deleteBook`, { _id: _id} )
        .then(res => {
            console.log("Deleted book from saved");
            this.refreshPage();
        })
        .catch(err => {
            console.error(err); 
        });
    }

    addBook = (book) => {
        axios.post(`/api/addBook`, { book } )
        .then(res => {
            console.log("Added book");
            this.refreshPage();
        })
        .catch(err => {
            console.error(err); 
        });
    }


    // Scrape all the books on mount
    componentDidMount() {
        this.refreshPage();
    }
    
    render() {
        const classNames = this.props.classNames;

        return (
            <div>
                <div className="row">
                {this.state.books.map((book, i) => {
                    return(            
                        <div className={classNames}>
                            <Book 
                            key={book._id}
                            refreshParentPage={this.refreshPage}
                            deleteBook={this.deleteBook}
                            _id={book._id}
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

export default Books;