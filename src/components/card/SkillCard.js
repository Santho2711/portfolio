import React from 'react'

function SkillCard({
    data
}) {
  return (
    <div className='skillCard'>
        <div className='tp_blk'>
            {
                data?.skill &&
            <strong>{ data.skill}</strong>
            }
            {
                data?.icon && <img src={data.icon}/>
            }
        </div>
        {
            data?.description && 
            <p>
                {data.description}
            </p>
        }
    </div>
  )
}

export default SkillCard