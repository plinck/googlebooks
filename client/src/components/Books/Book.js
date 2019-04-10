import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.favsClasses = 'material-icons red';
    }

    // Delete 
    deleteBook = () => {
        this.props.deleteBook(this.props._id);
    }

    refreshPage = () => {
        this.props.refreshParentPage();
    }

    render() {      
        // decontruct props
        let { title, authors, description, imageUrl, url} =  this.props;

        if (!imageUrl) {
            imageUrl = "./images/NewsScraper275x200.png";
        } 

        return ( 
            <div className="col s12">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={imageUrl} alt={title} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <span className="card-title">{title}</span>
                            <h6>{authors}</h6>
                            <p>{description}</p>
                        </div>
                        <div className="card-action">
                            <a target="_blank" rel="noopener noreferrer" href={url}>More Info
                            </a>
                            <a href="#!" className="indigo-text text-darken-4"
                                onClick={() => this.deleteBook()}>Delete
                            </a>
                            <a href="#!" className="btn-floating grey" alt="Save Book">
                                <i className={this.favsClasses}>favorite</i>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;