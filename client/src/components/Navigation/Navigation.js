import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            // <!--  NAV -->
            <div>
                <ul className="sidenav" id="mobile-links">
                    <a href="/" className="brand-logo"><i className="material-icons">markunread_mailbox</i>Home</a>
                    <li><a href="/Books">Books</a></li>
                </ul>
                <nav className="nav-wrapper indigo">
                    <div className="container">
                        <a href="/" className="brand-logo center hide-on-large-only">Google Books</a>
                        <a href="/" className="brand-logo hide-on-med-and-down"><i className="material-icons">markunread_mailbox</i>Books</a>
                        <a href="#!" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Dashboard</Link></li>
                            <li><NavLink to="/Books">Books<i className="material-icons white-text right">save</i></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
            // <!--  END NAV -->
        );
    }
}

export default Navigation;