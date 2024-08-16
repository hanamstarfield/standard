import React from 'react'

const Status = ({count}) => {


  return (
    <p>{count >= 5? "쨔쟌~~~":"5번 눌러봐!"}</p>
  )
}

export default Status