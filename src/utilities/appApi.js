

const baseUrl = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_CONTROLLER;

console.log(baseUrl,"base ")

export const ApiUrl = () => ({
  homeContents: baseUrl + process.env.REACT_APP_HOME,
  skillContents: baseUrl + process.env.REACT_APP_SKILLS,
  aboutContents: baseUrl + process.env.REACT_APP_ABOUT,
  backgroundContents: baseUrl + process.env.REACT_APP_BACKGROUND,
  projects: baseUrl + process.env.REACT_APP_PROJECTS,
  contact: baseUrl + process.env.REACT_APP_CONTACT,
  reachThrough: baseUrl + process.env.REACT_APP_ENQUIRY,
});   