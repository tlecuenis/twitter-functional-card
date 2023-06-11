import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css';
import { useState } from 'react';

export const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Tomás Matías Lecuenis",
      userName: "tlecuenis"
    },
    {
      id: 2,
      name: "Miguel Ángel Durán",
      userName: "midudev"
    },
    {
      id: 3,
      name: "Javier Milei",
      userName: "JMilei"
    }
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // concatenamos copia de cards con el nuevo objeto
    setCards([...cards, {
      id: cards.length + 1,
      name: e.target.name.value,
      userName: e.target.userName.value
    }])

    console.log(cards);
  }

  return (
    <>
      <section className='app'>
        {cards.map(card => {
          return(
            <TwitterFollowCard 
              key={card.id}
              name={card.name}
              userName={card.userName}
            />
          )
        })}
      </section>
      
      <form onSubmit={handleSubmit}>
        <label> Agregar usuarios </label>
        <input type="text" name='name' placeholder='nombre y apellido'/>
        <input type="text" name='userName' placeholder='nombre de usuario'/>
        <button type="sumbit">Agregar</button>
      </form>
    </>
  )
}

