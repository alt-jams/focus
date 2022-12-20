import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '../contexts/ChallengesContext';

import Link from "next/link"
import Dashboard from './Dashboard';
import PlantList from './PlantsList';

interface HomeProps {
  plants: string;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      challengesCompleted = {props.challengesCompleted}
    >
      <div>
        <Link href="/">
          <Dashboard />
        </Link>
        <Link href="/plants">
          <PlantList/>
        </Link>
      </div>
   
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {challengesCompleted} = ctx.req.cookies;
  const {plants} = ctx.req.cookies;
  
  return{
    props: {
      challengesCompleted: Number(challengesCompleted),
      plants: String(plants)
    }
  }
}