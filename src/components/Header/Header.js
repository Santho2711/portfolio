import React from "react";

function Header({ active, onPress }) {
  const links = ["home", "about me", "background" , "skills" ,"projects" , "contact"];
  // projects
  return (
    <header>
      <div className="inner">
        <button type="button" className="logo">
          santhosh
        </button>

        {/* nav links */}
        <ul className="navLink">
          {links &&
            links.length > 0 &&
            links.map((link, id) => (
              <li key={id}>
                <button
                  type="button"
                  className={active == id ? "active lnk" : "lnk"}
                  onClick={() => onPress(id)}
                >
                  <b>{link}</b>
                  <span className="icon">
                    <img src={process.env.PUBLIC_URL + link == "home" ? '/assets/images/home.png' : 
                              link == "about me" ? '/assets/images/abouti.png' : 
                              link == "background" ? '/assets/images/back.png' : 
                              link == "skills" ? '/assets/images/skill.png' : 
                              link == "projects" ? '/assets/images/project.png' : 
                              link == "contact" ? '/assets/images/contact.png' : null
                    }/>
                  </span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
