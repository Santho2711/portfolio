import React, { useEffect, useState } from "react";
import Loading from "../components/Loader/Loading";
import { Typewriter } from "react-simple-typewriter";
import Primary from "../components/Button/Primary";
import axios from "axios";
import { ApiUrl } from "../utilities/appApi";

function Home() {
  const [homeContent,setHomeContent] = useState({})
  const [load, setLoad] = useState(false);
  


  const homeApiCall = async () => {
    setLoad(true)
    const response = await axios.post(ApiUrl().homeContents)
    if(response.status==200){
      if(response?.data?.status=='success'){
        setHomeContent(response?.data?.data);
      }
    }
    setLoad(false)
  }

  useEffect(() => {
    document.title = "Home";
    homeApiCall();
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <div className="home">
      <div className="innerhome">
        <div className="img_blk">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/background.jpeg"}
          />
        </div>
        <div className="content">
          <div className="container">
            <b>Hey there!... I 'm</b>
            {homeContent?.name && <h1>{homeContent.name}</h1>}

            {homeContent?.roles?.length > 0 && (
              <strong>
                I am a{" "}
                <span>
                  <Typewriter
                    words={homeContent.roles}
                    cursor
                    cursorStyle="_"
                    cursorColor="#ffb400"
                    typeSpeed={150}
                    deleteSpeed={80}
                    loop
                  />
                </span>
              </strong>
            )}
            <div className="btnBlk">
              {/* <Primary
                icon={'./assets/images/download.png'}
                text={'Download CV'}
              /> */}
              {homeContent?.resume && (
                <a
                  href={homeContent.resume}
                  download={"Santhosh kumar"}
                  className="btn"
                  target="_blank"
                >
                  Download CV
                  <span className="icons">
                    <img src={"./assets/images/download.png"} />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
