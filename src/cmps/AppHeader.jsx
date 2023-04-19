import { Link, NavLink, withRouter } from "react-router-dom";


function _AppHeader(props) {

    return (
        <header className="app-header">
            <section className="container">
                <NavLink exact to="/" className="logo"><i className="fa-brands fa-bitcoin"></i>Crypto<strong>Wallet</strong></NavLink>
                <section className="back">
                </section>
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/contact">Contacts</NavLink>
                    <NavLink to="/statistic">Statistic</NavLink>
                    <NavLink to="/signup">Sign up</NavLink>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)