import { Link, NavLink } from "react-router-dom";


export function AppHeader() {
    return (
        <header className="app-header">
            <section className="container">
                <NavLink to="/" className="logo"><i className="fa-brands fa-bitcoin"></i>Crypto<strong>Wallet</strong></NavLink>
                <section className="back">
                </section>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/contact">Contacts</NavLink>
                    <NavLink to="/statistic">Statistic</NavLink>
                    <NavLink to="/signup">Sign up</NavLink>
                </nav>
            </section>
        </header>
    )
}
