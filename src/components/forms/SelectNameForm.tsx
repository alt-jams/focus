import { FormEvent, useState } from 'react';
import Lottie from "react-lottie"
import Plant5 from '../../assets/animations/plant5.json'
import styles from '../../styles/components/NewPlantModal.module.css';

interface SelectNNameFormsProps{
  setStep: (n: number) => void;
  setName: (name: string) => void;
}

export default function SelectNameForm({setStep, setName} : SelectNNameFormsProps) {

  const [plantName, setPlantName] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  function handleCreatePlant(e: FormEvent){
    e.preventDefault();
    setStep(2);
    setName(plantName);
}

  
  return (
    <form onSubmit= {handleCreatePlant}>
      <div className={styles.newPlantForm}>
        <strong>Parabéns</strong>
        <p>Você tem uma nova plantinha</p>
        <p>Deseja adicionar à sua estufa?</p>

        <Lottie options={{...defaultOptions, animationData: Plant5}} height={180} width={180} />
        <p>Escolha o nome da plantinha</p>
        <input className={styles.plantTextField} id="plant-name" name="plant-name" value={plantName} onChange={(e) => {setPlantName(e.target.value)}}/>

        <button className={styles.plantTextButton} type="submit">Criar planta</button>
      </div>
    </form>
  )
}