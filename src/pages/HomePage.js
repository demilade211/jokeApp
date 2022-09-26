import React, { useState, useEffect } from 'react'
import Categories from '../components/Categories'
import JokeCard from '../components/JokeCard'
import downArrow from "../assets/images/path-copy-7.png"
import { getAll, getCategories } from "../services/jokes"

let color = [ "#ff1a1a","#ff751a","#ffa64d","#ffff1a","#80ff00","#00ff80","#1a75ff"]

const HomePage = () => {

    const [jokes, setJokes] = useState([])
    const [categories, setCategories] = useState([])
    const [pag, setPag] = useState(11)


    useEffect(() => {

        (async () => {
            try {
                const { data: jokesData } = await getAll()
                const { data: categoriesData } = await getCategories()

                setJokes((prev) => ([...jokesData.result]))
                setCategories((prev) => ([...categoriesData])) 
            } catch (error) {
                console.log(error);
            }


        })()

    }, [])
    console.log(jokes);

    return (
        <div id='home-page'>
            <div className='categ-grid'>
                {categories.map((cat, index) => (<Categories key={index} color={color[Math.floor(Math.random()*color.length)]} category={cat} />))}
            </div>
            <div className='jokes-grid'>
                {jokes.map((cat, index) => (
                    index < pag && <JokeCard key={index} value={cat.value} categories={cat.categories} id={cat.id} />
                ))}
            </div>
            <div className='load-con'>
                <button onClick={()=>{
                    setPag((prev)=>(prev+10))
                }}>VIEW MORE <img src={downArrow} alt="icon" /></button>
            </div>

        </div>
    )
}

export default HomePage