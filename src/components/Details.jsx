import React from 'react'
import {useParams} from 'react-router-dom'
import data from '../data'

function Details() {
  let {id} = useParams()
  return (
    <div>
      <h2>Details Component</h2>
      <h3>{data[id].name}</h3>
      <h3>{data[id].age}</h3>
    </div>
  )
}

export default Details