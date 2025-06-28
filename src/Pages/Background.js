import React, { useEffect, useState } from 'react'
import Loading from "../components/Loader/Loading";
import JourneyCard from '../components/card/JourneyCard';
import { background } from '../utilities/Contents';
import axios from 'axios';
import { ApiUrl } from '../utilities/appApi';

function Background() {
  
  const [backgroundContent, setBackgroundContent] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    backgroundApiCall();
    document.title = "Background";
  }, []);

  const backgroundApiCall = async () => {
    setLoad(true);
    const response = await axios.post(ApiUrl().backgroundContents);
    if (response.status == 200) {
      if (response?.data?.status == "success") {
        setBackgroundContent(response?.data?.data);
      }
    }
    setLoad(false);
  };

  if(load){
    return <Loading/>
  }
  return (
    <div className="background">
      <div className="container">
        <div className="innerback pad">
          <div className="hd">
            <h1 className="mb">
              The <span>Journey</span>
            </h1>
          </div>
          {/* list of the things */}
          <div className="flx">
            <div className="sim lft">
              <strong className="ttl">Education</strong>
              <div className="achv">
                {backgroundContent?.education_datas?.length > 0 &&
                  backgroundContent.education_datas.map((item, index) => {
                    return <JourneyCard key={index} data={item} />;
                  })}
              </div>
            </div>
            <div className="sim rgt">
              <strong className="ttl">Work History</strong>
              <div className="achv">
                {backgroundContent?.work_datas?.length > 0 &&
                  backgroundContent.work_datas.map((item, index) => {
                    return <JourneyCard key={index} data={item} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background