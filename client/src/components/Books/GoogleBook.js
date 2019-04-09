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
    saveGoogleBook = (event) => {
        event.preventDefault();
        // Call node to save googleBook
        console.log(event.target);
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
            return (<Redirect to='/GoogleBooksSaved' />);
        }
      
        let { title, authors, description, imageUrl, url} =  this.props;
        if (!imageUrl) {
            imageUrl = "./images/NewsScraper275x200.png";
        } 

        return ( 
            <div className="card">
                <div className="card-image">
                    <img className="materialboxed" src={imageUrl} alt="" />
                    <a href="#!" className="halfway-fab btn-floating grey">
                        <i className={this.favsClasses}
                            onMouseOver={this.handleMouseOver}
                            onMouseOut={this.handleMouseOut}
                            onClick={this.saveGoogleBook.bind(this)}
                            >favorite
                        </i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="flow-text card-title">{title}</span>
                    <p className="truncate">{authors}</p>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={url} className="indigo-text text-darken-4" data-target="modal-post">
                        <i className="googleBookInfo material-icons left">open_in_browser</i>
                    </a>
                </div>
            </div>
        );
    }
}

export default GoogleBook;