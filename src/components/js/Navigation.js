import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <nav className="navigation">
                    <Link to="/home">Home</Link>
                    <Link to="/display">Create</Link>
                    <Link to="/extras">Extras</Link>
        </nav>
    );
}

export default Navigation;