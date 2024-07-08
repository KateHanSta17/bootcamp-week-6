const repoNameEl = document.querySelector('#repo-name');
const issueContainerEl = document.querySelector('#issues-container');
const limitWarningEl = document.querySelector('#limit-warning');

const getRepoName = function () {
  // Where is this value coming from?
  // TODO: Write your answer here
  const queryString = document.location.search; // The query string part of the current URL
  const repoName = queryString.split('=')[1]; // Extracts the repository name from the query string

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    // Under what condition will this run?
    // TODO: Write your answer here
    document.location.replace('./index.html'); // Redirects to index.html if repoName is undefined or empty
  }
};

const getRepoIssues = function (repo) {
  const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        // What is this checking for? Under what condition will this be `true`?
        // TODO: Write your answer here
        if (response.headers.get('Link')) {
          displayWarning(repo); // Display a warning if there are additional pages of issues
          // If there are more than 30 issues, from GitHub  API documentation. The response header will provide a link to the next page of issues.
        }
      });
    } else {
      document.location.replace('./index.html'); // Redirect if the repo is not found
    }
  });
};

const displayIssues = function (issues) {
  // Is there a difference between this and `!issues.length`?
  // TODO: Write your answer here
  // non truthy values are: 0, null, undefined, NaN, false, ''
  // !issues.length will return true if issues.length is 0
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (let issueObj of issues) {
    const issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issueObj.html_url);
    issueEl.setAttribute('target', '_blank');

    const titleEl = document.createElement('span');
    titleEl.textContent = issueObj.title;
    issueEl.appendChild(titleEl);

    const typeEl = document.createElement('span');

    if (issueObj.pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

// What does this function do?
// TODO: Write your answer here
const displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';
//  Creates a link to the GitHub repository's issues page. Renders an a tag to more issues if there are more than 30 issues.
  const linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', `https://github.com/${repo}/issues`);
  linkEl.setAttribute('target', '_blank');

  // Where does this appear on the page?
  // TODO: Write your answer here
  // It appears in the limit-Warning ID div element - the class can be found in the HTML file. Line 29.
  limitWarningEl.appendChild(linkEl);
};

getRepoName();
