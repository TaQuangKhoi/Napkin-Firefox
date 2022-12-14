console.log("background.js loaded");

let settingPageBtn = document.getElementById("setting-page");
let githubRepoBtn = document.getElementById("github-repo");

settingPageBtn.addEventListener("click", () => {
  console.log("setting page clicked");
  browser.tabs.create({
    url: "../setting/setting-page.html"
  });
});