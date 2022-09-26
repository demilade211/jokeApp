import React from 'react'
import arrow from "../assets/images/path.png"
import thunder from "../assets/images/green-light-copy.png"
import { Link} from 'react-router-dom'

function JokeCard({value,categories,id}) {
  return (
    <div id='joke-card'>
        <h1><img src={thunder} alt="icon"/>{`${categories.length ===0?"UNCATEGORIZED":categories[0].toUpperCase()}`}</h1>
        <p>{value}</p>
        <p className='btn'><Link to={`/${id}`}>SEE STATS<img src={arrow} alt="icon"/></Link></p>

    </div>
  )
}

export default JokeCard