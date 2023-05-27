import AnimalShow from './AnimalShow';
import {useState} from 'react';
import './App.css'

function getRandomAnimal(){
  const animals =['bird','cat','cow','dog','gator','horse'];

  return animals[Math.floor(Math.random()*animals.length)]
}


function App(){

  const [animals,setAnimals] = useState([]);
  
  const handleClick=()=>{
    // A hnuaia array syntax hi kan hman nachhan chu a tira awmsa kha display reng kan duh vang ania. Ramsa lem indawt a tlar phei kan duh vang ani
    setAnimals([...animals, getRandomAnimal()]);
  }
  
  // Hetah hian index hi chu a element pakhat index sawina kha ani.
  // renderedAnimals hi array ani anga, element thar apiang a rawn in add
  // belh zel ang. AnimalShow element hlir a awm ang.



  const renderedAnimals = animals.map((animal, index)=>{
    return <AnimalShow type={animal} key={index} />
  })

  return (
            <div className="app">
              <button onClick={handleClick}>Add Animal</button>
              <div className="animal-list"> {renderedAnimals} </div>
            </div>
  )
}

export default App;