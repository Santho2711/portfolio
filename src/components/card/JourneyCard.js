import React from 'react'
import { formatDuration } from '../../utilities/helperfunction';

function JourneyCard({
    data
}) {
    let duration;
    if(data?.from && data?.to){
        duration = `${formatDuration(data.from)} - ${formatDuration(data.to)}`
    }

  return (
    <div className="jour">
      <div className="mark" />
      <div className="pulse" />
      <div className="tp_blk">
        <b>{data?.designation && data?.designation}</b>
        <span>{duration && duration}</span>
      </div>
      {data?.organisation && <strong>{data.organisation}</strong>}
      {data?.description && <p>{data.description}</p>}
    </div>
  );
}

export default JourneyCard