import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [city, setCity] = useState(0);
  const {id, nameCity, population, age, image, placesToSee} = data[city];


  const previosCity = () => {
    setCity((city => {
      city --;
      if (city < 0) {
        return data.length-1;
      }
      return city;
    }))
  }

  const nextCity = () => {
    setCity((city => {
      city ++;
      if (city > data.length -1) {
        city = 0;
      }
      return city;
    }))
  }

return (<div>
  <div className='container'>
  <h1>  The { data.length }   beautiful cities in Spain to visit. </h1>
  </div>


   <div>
<div className='container'>
  <h2> { id } . { nameCity } </h2>
</div>

<div className='container'>
  <img src={image} width="500px" alt='cities'/>
</div>

<div className='container'>
  <h3> { nameCity } was founded in { age }.</h3>
</div>

<div className='container'>
  <h3> The population of { nameCity } is { population } people.</h3>
</div>

<div className='container h3'>
  <h3> I strongly advise you to visit { placesToSee } in {nameCity}.</h3>
</div>

<div className='btn container'>
       <button onClick={previosCity}> Previos </button>
       <button onClick={nextCity}> Next </button>
    </div>

</div>


</div>



)
    

}

export default App;
