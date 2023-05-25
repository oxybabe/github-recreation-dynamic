const renderRepos = () => {
  const container = document.querySelector("#repos-list");
  repos.forEach((repo) => {
    let listRepo = document
      .querySelector("#repo-title")
      .content.cloneNode(true);
    listRepo.appendChild(document.createTextNode(repo));
    container.appendChild(listRepo);
  });
};

const getResources = async () => {
  const request = await fetch(
    "https://api.github.com/users/oxybabe/repos?sort=updated_at"
  );
  const response = await request.json();
  response.forEach((obj) => {
    repos.push(obj.name);
  });
  console.log(response);
  renderRepos();
};

let repos = [];
getResources();

//"user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",

// document
//   .getElementById("fetch-resources")
//   .addEventListener("click", getResources);

// async function getRepos() {
//   const response = await fetch("https://api.github.com/users/oxybabe/repos/");
//   const jsonData = await response.json();
//   // console.log(jsonData);
//   jsonData.forEach((obj) => {
//     repos.push(obj.text);
//   });
//   renderRepos();
// }
// getRepos = async function () {
//   const response = await fetch("https://api.github.com/users/oxybabe/repos/");
//   console.log(response);
//   const jsonData = await response.json();
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
