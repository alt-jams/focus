import { FaSun } from "react-icons/fa";
import styles from '../styles/components/ActiveDarkMode.module.css';

export function ActiveDarkMode(){

    function setDarkMode(){
        document.body.classList.toggle("dark");
    }

    return(      
        <button className= {styles.active} onClick={setDarkMode}>
            <FaSun size={24} color="#5965E0"/>
        </button>
    ) 
}