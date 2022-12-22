import React from 'react'
import Homebody from './Homebody'

const Home = (props) => {
  const {showAlert} = props
  return (
    <div>
   <Homebody showAlert={showAlert} />
    </div>
  )
}

export default Home
