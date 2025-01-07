const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* we can apply style inside element with style {{}} */}
                <a href="/create" >New Blog</a>
            </div>
        </nav>
     );
}
 
export default NavBar;