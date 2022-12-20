import { useContext, useState} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/NewPlantModal.module.css';
import SelectNameForm from './forms/SelectNameForm';
import SelectPlantForm from './forms/SelectPlantForm';


export function NewPlantModal(){
    const { closeNewPlantModal, setPlantCont } = useContext(ChallengesContext);
    const [plantName, setPlantName] = useState('');
    const [step, setStep] = useState(1);

  function onClose() {
    closeNewPlantModal();
    setPlantCont(0);
  }


    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
              
                {
                step == 1 ? 
                  <SelectNameForm setName={(name: string) => setPlantName(name)} setStep={(n: number) => setStep(n)} /> 
                  : 
                  <SelectPlantForm closeModal={() => onClose()} plantName={plantName} />
                }

        
                <button className={styles.closeButton} type="button">
                    <img src="/icons/close.svg" alt="Fechar modal"
                    onClick={() => onClose()}
                    />
                </button>
            </div>
        </div>
    )
}