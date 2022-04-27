import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='links'>
                <li><a href="/">MySite</a></li>
                <li><a href="/extras">Extras</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;