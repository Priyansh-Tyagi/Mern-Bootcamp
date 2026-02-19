import { useState } from 'react'
import './App.css'
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Card from './components/Card';
import myimage from './assets/myimage.jpg';
import User_Exist from './components/User_Exist';
import User_Not from './components/User_Not';
import Count_Check from './components/Count_check';

function App() {
  const [User, setUser] = useState(false)
  const [count, setCount] = useState(0)
  const car = ["Alto","Ciaz","Impala", "Bolero"];
  const Handle_increase = () => {
    setCount(count + 1);
  }
  const Handle_decrease = () => {
    if(count == 0){
      return;
    }
    setCount(count - 1);
  }

  const name="abc";
  const age = 23;
  return (
    <>
    {/* <h3>Car Name</h3>
    <ul>
    {car.map((j, i)=>{
      return <li key={i}>{j}</li>
    })}
    </ul> */}

    {/* <Hello name={name} age={age} />
    <Navbar />    
    <Card
        title="falana Card"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
        image={myimage}
      />

      <button onClick={Handle_increase}>Increase</button>
      <h1>{count}</h1>
      <button onClick={Handle_decrease}>Decrease</button> */}

      <Count_Check />
    
    </>
  );
}

export default App
