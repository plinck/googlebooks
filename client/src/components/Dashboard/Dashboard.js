import React from 'react';
import Books from '../Books/Books';

class Dashboard extends React.Component {
    render() {
        return ( 
            <div className="row">
                <div className="col s12 m12 l5">
                    <div className="card">
                        <div className="card-content">
                            <span className="flow-text card-title">Dashboard - Welcome</span>
                            <p>Click Google Books <i className="material-icons blue-text">content_cut</i>to Search for Books</p>
                            <p>Click Books <i className="material-icons blue-text">save</i>to View Saved Books</p>
                            <p>Click Open <i className="material-icons blue-text">open_in_browser</i> to open web page for that book</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l7">
                    <Books classNames="col s12 m12 l12"/>     
                </div> 
            </div>
        );
    }
}

export default Dashboard;