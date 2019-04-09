import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.favsClasses = 'material-icons red';
    }

    // Delete 
    deleteBook = (event) => {
        event.preventDefault();
        this.props.deleteBook(this.props._id);
    }

    refreshPage = () => {
        this.props.refreshParentPage();
    }

    render() {      
        // decontruct props
        let { _id, title, authors, description, imageUrl, url} =  this.props;
        const {refreshParentPage, deleteBook} = this.props;

        if (!imageUrl) {
            imageUrl = "./images/NewsScraper275x200.png";
        } 

        return ( 
            <div className="card">
                <div className="card-image">
                    <img className="materialboxed" src={imageUrl} alt="" />
                    <a href="#!" className="halfway-fab btn-floating grey">
                        <i className={this.favsClasses}>favorite</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="flow-text card-title">{title}</span>
                    <p className="truncate">{authors}</p>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={url} className="indigo-text text-darken-4" data-target="modal-post">
                        <i className="articleInfo material-icons left">open_in_browser</i>
                    </a>
                    <a href="#!" className="indigo-text text-darken-4">
                        <i className="articleDelete material-icons left" onClick={this.deleteBook.bind(this)}>delete</i>
                    </a>
                </div>
            </div>          
        );
    }
}

export default Book;