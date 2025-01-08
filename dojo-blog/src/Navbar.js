import {Link} from'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* we can apply style inside element with style {{}} */}
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;