import styles from '../../styles/components/NewPlantModal.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

interface SelectPlantFormProps {
  closeModal: () => void;
  plantName: string;
}

export default function SelectPlantForm({closeModal, plantName}: SelectPlantFormProps) {
  const {createNewPlant} = useContext(ChallengesContext);

  function onClickType(n : number) {
    closeModal();
    createNewPlant({image: n, name: plantName});
  }

  return(
    <div>

      <p>Escolha o tipo de planta</p>

      <div className={styles.plantsImages}>
        <button onClick={() => onClickType(0)}>
          <img src='plants/plant00.png' alt="plant" />
        </button>
    
        <button onClick={() => onClickType(1)}>
          <img src='plants/plant01.png' alt="plant" />
        </button>

        <button onClick={() => onClickType(2)}>
          <img src='plants/plant02.png' alt="plant" />
        </button>
      </div>
      

   
      

    </div>
  )
}