import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <h1 className="logo">Contact Manager</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
