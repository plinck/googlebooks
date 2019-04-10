import React from 'react';

class SearchForm extends React.Component {
    state = {
        search: "",
    };

    searchBook = () => {
        this.props.searchBook(this.state.search);
        // clear form
        this.setState({
            search: ""
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('search submitted', this.state);
        this.searchBook();
    }

    render(){
        return(
            <div>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="active input-field col s12 m3">
                                <input id="search" name="search" onChange={this.handleChange} type="text" className="active validate" required="" aria-required="true" />
                                <label className="active" htmlFor="search">Search</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="left-align">
                                <button className="btn waves-effect waves-light blue" type="submit" name="submit">Search
                                    <i className="material-icons right">search</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchForm;