const getResources = async () => {
  const request = await fetch("https://api.github.com/users/oxybabe/repos");
  const response = await request.json();
  const name = response[0].name;
  console.log(name);
};

document
  .getElementById("fetch-resources")
  .addEventListener("click", getResources);

let repos = []
async function getRepos() {
  const response = await fetch("https://api.github.com/users/oxybabe/repos/")
  const jsonData = await response.json()
  // console.log(jsonData);
  jsonData.forEach((obj) => { repos.push(obj.text) })
  renderRepos()
}
// getRepos = async function () {
//   const response = await fetch("https://api.github.com/users/oxybabe/repos/");
//   console.log(response);
//   const jsonData = await response.json();
// }

// const renderRepos = () => {
//   const container = document.querySelector("#repos-list")
//   repos.forEach((repos) => {
//     let listItem = document.querySelector(#repos-list)
//   })
// }

// getUser = async function () {
//   const response = await fetch("https://api.github.com/users/oxybabe/");
//   console.log(response);
//   const jsonData = await response.json();
// }

// async function logJSONData() {
//   const response = await fetch("https://api.github.com/users/oxybabe");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// async function logJSONData() {
//   const response = await fetch("https://api.github.com/users/oxybabe/repos");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// https://api.github.com/users/{user}/repos
