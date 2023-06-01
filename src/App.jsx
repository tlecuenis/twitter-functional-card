import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export const App = () => {
  const userNameIntoAt = (userName) => `@${userName}`
  
  return (
    <>
      <TwitterFollowCard 
      name="Tomás Matías Lecuenis"
      userName="tlecuenis"
      />
    </>
  )
}

