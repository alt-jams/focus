import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';
import Lottie from 'react-lottie';
import Plant1 from '../assets/animations/plant1.json'
import Plant2 from '../assets/animations/plant2.json'
import Plant3 from '../assets/animations/plant3.json'
import Plant4 from '../assets/animations/plant4.json'
import Plant5 from '../assets/animations/plant5.json'


export function ChallengeBox(){
const { activeChallenge, resetChallenge, completeChallenge, newPlantCont } = useContext(ChallengesContext);
const { resetCountdown } = useContext(CountdownContext);

function handleChallengeSucceeded(){
    completeChallenge();
    resetCountdown();
}

function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
}

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                            >Completei</button>
                    </footer>

                </div>
            ) : (
                <div className={styles.challengeNotActive} >
                    <strong>Finalize um ciclo para fazer a plantinha crescer</strong>
                    <p>
                        {newPlantCont == 0 && <Lottie options={{...defaultOptions, animationData: Plant1}} height={180} width={180} />}
                        {newPlantCont == 1 && <Lottie options={{...defaultOptions, animationData: Plant2}} height={180} width={180} />}
                        {newPlantCont == 2 && <Lottie options={{...defaultOptions, animationData: Plant3}} height={180} width={180} />}
                        {newPlantCont == 3 && <Lottie options={{...defaultOptions, animationData: Plant4}} height={180} width={180} />}
                        {newPlantCont == 4 && <Lottie options={{...defaultOptions, animationData: Plant5}} height={180} width={180} />}
                    </p>
                    <p>Continue focado para sua plantinha crescer</p>
                </div>
            )}
        </div>
    )
}