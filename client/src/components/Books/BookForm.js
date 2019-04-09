import React from 'react';

class BookForm extends React.Component {
    state = {
        title: "",
        authors: "",
        description: "",
        imageUrl: "",
        url:""
    };

    addBook = () => {
        // clear form
        this.setState({
            title: "",
            authors: "",
            description: "",
            imageUrl: "",
            url:""
        });

        this.props.addBook(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', this.state);
        this.addBook();
    }

    render(){
        return(
            <div>
                <p><i className="material-icons blue-text">book</i>Add Book</p>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="active input-field col s12 m3">
                                <input id="title" name="title" onChange={this.handleChange} type="text" className="active validate" required="" aria-required="true" />
                                <label className="active" htmlFor="title">Title</label>
                            </div>
                            <div className="input-field col s12 m9">
                                <input id="authors" name="authors" onChange={this.handleChange} type="text" className="active validate" required="" aria-required="true" />
                                <label className="active" htmlFor="authors">Authors</label>
                            </div>
                            <div className="input-field col s12 m9">
                                <input id="description" name="description" onChange={this.handleChange} type="text" className="active validate" required="" aria-required="true" />
                                <label className="active" htmlFor="description">description</label>
                            </div>
                            <div className="input-field col s12 m9">
                                <input id="imageUrl" name="imageUrl" onChange={this.handleChange} type="text" className="active validate" required="" aria-required="true" />
                                <label className="active" htmlFor="imageUrl">imageUrl</label>
                            </div>
                            <div className="input-field col s12 m9">
                                <input id="url" name="url" onChange={this.handleChange} type="text" className="active validate" required="" aria-required="true" />
                                <label className="active" htmlFor="url">url</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-align">
                                <button className="btn waves-effect waves-light blue" type="submit" name="submit">Add Book
                                    <i className="material-icons right">note_add</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookForm;