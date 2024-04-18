import styles from "./menu.module.css"
import MenuItem from "./menuItem"

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li> <MenuItem text="Home" route="/" icon="https://super.so/icon/light/home.svg"/> </li>
                <li> <MenuItem text="About" route="/about" icon="https://super.so/icon/light/user.svg"/> </li>
                <li> <MenuItem text="Contact" route="/contact" icon="https://super.so/icon/light/mail.svg" /> </li>
            </ul>
        </nav>
    )
}