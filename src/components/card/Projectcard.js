import React, { useState } from 'react'
import ReactModal from 'react-modal';

function Projectcard({
    data
}) {
    const [modalOpen,setModalOpen] = useState(false)
  return (
    <>
      <div className={`${modalOpen ? "open" : ""} project_card skillCard`}>
        <a href={data?.url} target="_blank">
          <div className="img_blk">
            <img src={data?.image} />
          </div>
          <div className="cont_blk ">
            {data?.name && <strong>{data.name}</strong>}
            <button
              className="btn_blk"
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(!modalOpen);
              }}
            >
              i
            </button>
          </div>
        </a>
        <div className={` descr`}>
          <div className="top">
            {data?.name && <b>{data.name}</b>}
            <button type="button" onClick={() => setModalOpen(!modalOpen)}>
              X
            </button>
          </div>
          {data?.description && <p>{data.description}</p>}
        </div>
      </div>
    </>
  );
}

export default Projectcard