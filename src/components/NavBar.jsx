const NavBar = (props) => {
return (
    <div className="navbar">
            <img src="https://cdn-icons-gif.flaticon.com/10971/10971749.gif" className="App-logo" alt="logo"/>
            <a href={props.href} style={props.navStyle}>{props.text1}</a>
            <a href={props.href} style={props.navStyle}>{props.text2}</a>
            <a href={props.href} style={props.navStyle}>{props.text3}</a>
    </div>
)
}

export default NavBar;