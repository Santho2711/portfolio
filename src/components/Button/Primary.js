import React from 'react'

function Primary({
    text,
    onClick,
    icon
}) {
  return (
    <>
        {
            text && 
            <button onClick={onClick} className='btn'>
                    {text}
                <span className='icons'>
                    <img src={icon}/>
                </span>
            </button>
        }
    </>
  )
}

export default Primary