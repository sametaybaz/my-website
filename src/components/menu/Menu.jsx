import "./menu.scss"

function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul className="links">
                <li onClick={()=>setMenuOpen(false)} ><a href="#header">HOME</a></li>
                <li onClick={()=>setMenuOpen(false)} ><a href="#skills">SKILLS</a></li>
                <li onClick={()=>setMenuOpen(false)} ><a href="#projects">PROJECTS</a></li>
                <li onClick={()=>setMenuOpen(false)} ><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Menu