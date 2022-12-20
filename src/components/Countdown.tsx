import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

import { FaCheckCircle,  FaTimes, FaCaretRight} from "react-icons/fa";

export function Countdown(){
    const { minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                disabled 
                className={styles.countdownButton}>       
                    Ciclo encerrado &nbsp;&nbsp;  <FaCheckCircle size={24} color="#4CD62B"/> 
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}>       
                            Abandonar ciclo &nbsp;&nbsp;  <FaTimes size={24}/>
                        </button>
                    ): (
                        <button type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}>       
                            Iniciar um ciclo &nbsp;&nbsp;  <FaCaretRight size={30}/>
                        </button>
                    )} 
                </>
            )}              
        </div>
    );
}