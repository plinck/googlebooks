import React from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

class GoogleBook extends React.Component {
    constructor(props) {
        super(props);

        this.favsClasses = 'material-icons';

        if (props.saved){
            this.favsClasses += ' red';
        }    
    }

    state = {
        toSavedGoogleBooks: false,
    }

    // Save this sook to MongoDB
    saveGoogleBook = () => {
        // Call node to save googleBook
        const book = this.props;
        axios.post(`/api/addBook`, { book } )
        .then(res => {
            console.log("Added book");
            this.setState({toSavedGoogleBooks: true});
        })
        .catch(err => {
            console.error(err); 
        });
    }

    handleMouseOver = (e) => {
        console.log(e.target, e.pageX);
        e.currentTarget.className = 'material-icons red';
    }

    handleMouseOut = (e) => {
        console.log(e.target, e.pageX);
        e.currentTarget.className = this.favsClasses;
    }

    render() {
        if (this.state.toSavedGoogleBooks === true) {
            return (<Redirect to='/Books' classNames="col s12 m6 l6"/>);
        }
      
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
                            <a target="_blank" rel="noopener noreferrer" href={url}>More Info</a>
                            <a href="#!" className="btn-floating grey" alt="Save Book">
                                <i className={this.favsClasses}
                                    onMouseOver={this.handleMouseOver}
                                    onMouseOut={this.handleMouseOut}
                                    onClick={() => this.saveGoogleBook()}>favorite
                                </i>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleBook;