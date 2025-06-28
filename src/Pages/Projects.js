import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ApiUrl } from '../utilities/appApi';
import Loading from '../components/Loader/Loading';
import Projectcard from '../components/card/Projectcard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    projectsApiCall();
    document.title = "Projects";
  }, []);

  const projectsApiCall = async () => {
    setLoad(true);
    const response = await axios.post(ApiUrl().projects);
    if (response.status == 200) {
      if (response?.data?.status == "success") {
        setProjects(response?.data?.data?.projects);
      }
    }
    setLoad(false);
  };

  if (load) {
    return <Loading />;
  }

  return (
    <div className="projects skill">
      <div className="container">
        <div className="innerproject pad innerskill">
          <div className="hd">
            <h1>Projects</h1>
          </div>

          <div className="project_list skillSets">
            {projects?.length > 0 &&
              projects.map((item, index) => (
                <Projectcard key={index} data={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects