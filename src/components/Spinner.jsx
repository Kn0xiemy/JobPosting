import PacmanLoader from 'react-spinners/PacmanLoader';


import React from 'react'

const override = {
  display: 'block',
  margin: '100px auto'
}

const Spinner = ({loading}) => {
  return (
    <PacmanLoader 
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinner