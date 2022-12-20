import { ActiveDarkMode } from "../components/ActiveDarkMode";
import { LogoSection } from "../components/LogoSection";
import Head from 'next/head';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import styles from '../styles/pages/Home.module.css';

export default function Dashboard() {
  return (
    <div>
       <div className={styles.header}>
            <LogoSection />
            <ActiveDarkMode/>
          </div>
          <div className={styles.container}>
            <Head>
              <title>Início | Focus</title>
            </Head>



            <CountdownProvider>
              <section>
                <div>
                  <ChallengeBox />
                </div>
                <div>
                  <CompletedChallenges />
                  <Countdown />
                </div>
              </section>
            </CountdownProvider>
          </div>
    </div>
  )
}