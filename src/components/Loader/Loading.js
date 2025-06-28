import React from 'react'
import { BounceLoader, DotLoader } from 'react-spinners'
import './Loader.css'


function Loading() {
  document.title = "Loading..."
  return (
    <div className='load'>
        <DotLoader color='#ffb400'/>
    </div>
  )
}

export default Loading