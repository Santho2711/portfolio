import React, { useEffect, useState } from "react";
import { skill } from "../utilities/Contents";
import Loading from "../components/Loader/Loading";
import SkillCard from "../components/card/SkillCard";
import { ApiUrl } from "../utilities/appApi";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [load, setLoad] = useState(true);

    
    useEffect(() => {
    document.title = "Skills";
    skillsApiCall();
  }, []);

  const skillsApiCall = async () => {
    setLoad(true);
    const response = await axios.post(ApiUrl().skillContents);
    if (response.status == 200) {
      if (response?.data?.status == "success") {
        setSkills(response?.data?.data?.skills);
      }
    }
    setLoad(false);
  };

  if (load) {
    return <Loading />;
  }
  return (
    <div className="skill">
      <div className="container">
        <div className="innerskill pad">
          <div className="hd">
            <h1>
              <span>Growing </span> Over through
            </h1>
          </div>
          
          {/* skill sets */}
          <div className="skillSets">
            {
              skills?.length > 0 && skills.map((item,index) => {
                return (
                  <SkillCard
                    key={index}
                    data={item}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
