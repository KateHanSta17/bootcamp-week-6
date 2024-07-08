const userFormEl = document.querySelector('#user-form');
const languageButtonsEl = document.querySelector('#language-buttons');
const nameInputEl = document.querySelector('#username');
const repoContainerEl = document.querySelector('#repos-container');
const repoSearchTerm = document.querySelector('#repo-search-term');

const formSubmitHandler = function (event) {
  event.preventDefault();

  const username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a GitHub username');
  }
};

const buttonClickHandler = function (event) {
  // What is `event.target` referencing?
  // TODO: Write your answer here
  // event.target is referencing the HTML (in the real world say DOM element - better for more accurate results) element that triggered the event, 
  // in this case, the button that was click - clickHandler.
  // It allows the event handler to access and use properties or attributes of the clicked element to perform further actions.
  const language = event.target.getAttribute('data-language');

  // Why is this `if` block in place?
  // TODO: Write your answer here
  // The if block in the buttonClickHandler function ensures that the subsequent code is only executed when a valid data-language 
  // attribute is present on the clicked element. This validation helps prevent errors and ensures that the appropriate actions 
  // are taken only when a valid programming language is selected.
  if (language) {
    getFeaturedRepos(language);

    repoContainerEl.textContent = '';
  }
};

const getUserRepos = function (user) {
  const apiUrl = `https://api.github.com/users/${user}/repos`;

  fetch(apiUrl) // .then() method is used to handle the response from the fetch() function. IF THE FETCH IS SUCCESSFUL.
  // .then everytime it is successful it runs, the .catch is for when it fails.
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert(`Error:${response.statusText}`);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    })
    .finally(function () { // Finally runs there after the .then or .catch, it runs no matter what.
      // throw new takes us to catch. Good for alerting users or developers when we know an error is going to happen.
    })
    ;
    
};

const getFeaturedRepos = function (language) {
  // What are the query parameters doing here?
  // TODO: Write your answer here
  // The query parameters in the URL (q=${language}+is:featured&sort=help-wanted-issues) filter and sort the search 
  // results from GitHub's repository search API. The q parameter specifies the programming language and filters for 
  // featured repositories, while the sort parameter arranges the results by the number of "help wanted" issues. 
  // This makes the search results relevant and useful for users looking for featured repositories needing contributions 
  // in a specific programming language.
  const apiUrl = `https://api.github.com/search/repositories?q=${language}+is:featured&sort=help-wanted-issues`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert(`Error:${response.statusText}`);
    }
  });
};

const displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    // What would happen if there was no `return;` here?
    // TODO: Write your answer here
    // The return; statement in the displayRepos function ensures that the function exits early if there are no repositories to display. 
    // This prevents unnecessary execution of code, improves efficiency, and avoids potential errors. Without this return; statement, 
    // the function would continue executing even when there are no repositories, leading to redundant operations and potential issues.
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (let repoObj of repos) {
    // What is the result of this string concatenation?
    // TODO: Write your answer here
    // First Concatenation: Sets the text content of the search term element to the searched language or user.
    // Second Concatenation: Creates a string representing the full name of each repository in the format owner/repo, 
    // used for displaying repository names in the UI.
    const repoName = `${repoObj.owner.login}/${repoObj.name}`;

    const repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    const titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    const statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (repoObj.open_issues_count > 0) {
      statusEl.innerHTML =
        `<i class='fas fa-times status-icon icon-danger'></i>${repoObj.open_issues_count} issue(s)`;
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  }
};

userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);
