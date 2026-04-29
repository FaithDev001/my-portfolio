function Navbar() {
    return(
        <nav className="navbar">
            <h3 className="logo">FaithTech</h3>
            <ul className="nav-links">
                <li><a href="#home"><Home></Home></a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar