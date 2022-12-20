import { useContext } from 'react';
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from '../styles/pages/Home.module.css';

export default function PlantList() {
   const {plants} = useContext(ChallengesContext);
  
  return(
    <div className={styles.plantsContainer}>
      <h2>Suas plantas</h2>

      <div className={styles.plantList}>
        {plants.map((plant) => 
          <div className={styles.plantItem}>
            <div className={styles.imageBg}>
              <img src={`plants/plant0${plant.image}.png`} alt="" />
            </div>            
            <p>{plant.name}</p>
          </div>
          )}
      </div>
    </div>
  )
}