import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export const App = () => {
  return (
    <section className='app'>
      <TwitterFollowCard 
        name="Tomás Matías Lecuenis"
        userName="tlecuenis"
      />
      <TwitterFollowCard 
        name="Miguel Ángel Durán"
        userName="midudev"
      />
      <TwitterFollowCard 
        name="Javier Milei"
        userName="JMilei"
      />
    </section>
  )
}

