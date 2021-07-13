import { useContext } from "react"
import ThemeContext from "./ThemeContext"

function Header(props){
    let context = useContext(ThemeContext)
    return(
        <header style={{ backgroundColor: context.appHeader_bgColor }} className="app-header">
            <div className="app-header-inner container">
                <h1 className="app-title">Films Catalog</h1>
                <div>
                    <button onClick={() => props.setwlShowed(!props.wlShowed)}>&#9829;</button>
                    <button onClick={() => {
                        props.setTheme(props.theme === 'dark' ? 'light' : 'dark')
                    }}>Change Theme</button>
                </div>
            </div>
        </header>
    )
}

export default Header