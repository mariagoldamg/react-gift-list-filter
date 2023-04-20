import React from 'react';
import { data } from './data';
import { useState} from 'react';
import './App.css';

function App() {

  const [gifts, setGifts] = useState(data);
  
  const removeItem = (id)=>{
    let newGifts = gifts.filter(gift=>gift.id !==id);
    setGifts(newGifts) 
  }



  return (<div>
    <div className='container'>
      <h1>List of {gifts.length} Gifts</h1>
    </div>
    
    {gifts.map ((element)=>{
      const {id,gift,image} = element

      return (
        <div key={id}>

<div className='container'>
<h2>{id} {gift}</h2>
</div>

<div className='container'>
  <img src={image} width="300px"/>
</div>

<div className='container'>
  <button onClick = {()=>removeItem(id)}>Remove</button>
</div>
        </div>
      )
    })}
    <div className='container'>
      <button onClick ={()=> setGifts([])}> delete all</button>
    </div>
    
    </div>
  );
}

export default App;
