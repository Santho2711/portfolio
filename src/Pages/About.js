import React, { useEffect, useState } from "react";
import Loading from "../components/Loader/Loading";
import { ApiUrl } from "../utilities/appApi";
import axios from "axios";

function About() {
  const [aboutContent, setaboutContent] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    aboutApiCall();
    document.title = 'About'
  }, []);


  const aboutApiCall = async () => {
    setLoad(true);
    const response = await axios.post(ApiUrl().aboutContents);
    if (response.status == 200) {
      if (response?.data?.status == "success") {
        setaboutContent(response?.data?.data);
      }
    }
    setLoad(false);
  };
  if(load){
    return <Loading/>
  }

  return (
    <div className="about">
      <div className="container">
        <div className="innerabout pad">
          <div className="hd">
            {aboutContent?.pageTitle && (
              <h1 className="mb">{aboutContent.pageTitle}</h1>
            )}
            {aboutContent?.subparagraph && <p>{aboutContent.subparagraph}</p>}
          </div>
          <div className="flx">
            <div className="img_blk">
              <img
                src={
                  aboutContent?.leftImage ??
                  process.env.PUBLIC_URL + "./assets/images/abt.png"
                }
              />
            </div>
            <div className="txt_blk">
              <div className="hd">
                {aboutContent?.title?.title_one && (
                  <h2 className="mb sidehead">
                    <span>
                      {aboutContent.title.title_one}
                      <img
                        src="./assets/images/wave.webp"
                        style={{
                          width: 35,
                          marginLeft: 10,
                        }}
                      />
                    </span>
                  </h2>
                )}
                <b>Front-End Developer</b>
              </div>
              {aboutContent?.paragraph?.paragraph_one && (
                <p>{aboutContent.paragraph.paragraph_one}</p>
              )}
            </div>
          </div>
          <div className="subcontent">
            {aboutContent?.title?.title_two && (
              <strong className="sidehead">
                {aboutContent.title.title_two}
              </strong>
            )}
            {aboutContent?.paragraph?.paragraph_two && (
              <p>{aboutContent.paragraph.paragraph_two}</p>
            )}
          </div>
          <div className="subcontent">
            {aboutContent?.title?.title_three && (
              <strong className="sidehead">
                {aboutContent.title.title_three}
              </strong>
            )}
            {aboutContent?.paragraph?.paragraph_three && (
              <p>{aboutContent.paragraph.paragraph_three}</p>
            )}

            {aboutContent?.keys?.length > 0 && (
              <ul>
                {aboutContent.keys.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
