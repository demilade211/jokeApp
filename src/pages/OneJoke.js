import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from "../services/jokes"
import like from "../assets/images/2/hand.png"
import dislike from "../assets/images/2/hand-copy.png"


const OneJoke = () => {

  const { jokeId } = useParams();

  const [joke, setJoke] = useState({})


  useEffect(() => {

    (async () => {
      try {
        const { data: jokeData } = await getOne(jokeId)

        setJoke((prev) => ({ ...prev, ...jokeData }))
      } catch (error) {
        console.log(error);
      }


    })()

  }, [jokeId])
  console.log(joke)

  return (
    <div id='one-joke'>
      <div className='left'>
        <div className='left-in'>
          <h1>The Granny Joke</h1>
          <p>{joke.value}</p>
        </div>
        <div className='react-con'>
          <div className='like-con'>
            <div className='like'><img src={like} alt="icon"/></div>
            <div className='score'><p>321</p></div>
          </div>
          <div className='dislike-con'>
            <div className='like'><img src={dislike} alt="icon"/></div>
            <div className='score'><p>21</p></div>
          </div>
        </div>
      </div>
      <div className='right'>

      </div>
    </div>
  )
}

export default OneJoke