import React from 'react'
import Categories from '../components/Categories'
import JokeCard from '../components/JokeCard'

let arr = [
    {category:"SOCIAL JOKES",color:"#ff1a1a"},
    {category:"DAD JOKES",color:"#ff751a"},
    {category:"CHRISTMAS JOKES",color:"#ffa64d"},
    {category:"JOB JOKES",color:"#ffff1a"},
    {category:"BIRTHDAY JOKES",color:"#80ff00"},
    {category:"SOCIAL JOKES",color:"#00ff80"},
    {category:"PUNS",color:"#1a75ff"},
]

const HomePage = () => {
    
  return (
    <div id='home-page'>
        <div className='categ-grid'>
            {arr.map((cat)=>( <Categories color={cat.color} category={cat.category}/> ))}
        </div>
        <div className='jokes-grid'>
            {arr.map((cat)=>( <JokeCard /> ))}
        </div>
        
    </div>
  )
}

export default HomePage