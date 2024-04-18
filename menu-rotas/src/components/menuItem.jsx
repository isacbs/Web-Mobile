import Link from "next/link"
import styles from "./menuItem.module.css"

export default function MenuItem( {text, route, icon} ){

    var image = ""
    if (icon != null){
        image = <img src={icon} alt={text}/>
    }

    return (
        <Link className={styles.menuItem} href={route}> {image} <span>{text}</span> </Link>
    )
}