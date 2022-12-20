import { createContext, useState, ReactNode, useEffect} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { NewPlantModal } from '../components/NewPlantModal';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface Plant {
    name: string;
    image: number;
}


interface ChallendesContextData {
    challengesCompleted: number;
    activeChallenge: Challenge;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    openNewPlantModal: () => void;
    closeNewPlantModal: () => void;
    newPlantCont: number;
    setPlantCont: (cont: number) => void;
    createNewPlant: (name: Plant) => void;
    plants: Array<Plant>;
    
}

interface ChallengesProviderProps {
    children: ReactNode;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallendesContextData);

export function ChallengesProvider({ children,
    ...rest
}: ChallengesProviderProps) {

    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [newPlantCont, setNewPlantCont] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const[isNewPlantModalOpen, setIsNewPlantModalOpen] = useState(false);

    const [plants, setPlants] = useState<Array<Plant>>([]);
    
    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('challengesCompleted', String(challengesCompleted));
        
    }, [ challengesCompleted]);

    useEffect(() => {
        if (newPlantCont == 4){
            setIsNewPlantModalOpen(true)
        }
    }, [newPlantCont])

    function createNewPlant(plant: Plant) {
        setPlants([...plants, plant]);
    }



    function setPlantCont(cont: number) {
        setNewPlantCont(cont);
    }

    function openNewPlantModal(){
        setIsNewPlantModalOpen(true);
    }

    function closeNewPlantModal(){
        setIsNewPlantModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted'){
            new Notification('Novo desafio 🎉', {
                body:'Hora de se exercitar'
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
       
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
        setNewPlantCont(newPlantCont + 1);
    }
    

    return(
        <ChallengesContext.Provider value={{
            challengesCompleted, 
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            completeChallenge,
            openNewPlantModal,
            closeNewPlantModal,
            newPlantCont,
            setPlantCont,
            plants,
            createNewPlant,
            }}>
            {children}
             { isNewPlantModalOpen && <NewPlantModal />}
        </ChallengesContext.Provider>
    );
}