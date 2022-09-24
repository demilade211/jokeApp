import React from 'react'

const Categories = ({color,category}) => {
  return (
    <div id='categ' style={{backgroundColor:color}}>
        {category}
    </div>
  )
}

export default Categories