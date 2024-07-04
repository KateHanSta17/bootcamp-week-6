fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

// https://api.github.com/repos/nodejs/node/issues:
// The URL endpoint of the GitHub API to fetch issues from the 'nodejs/node' repository.

// ?per_page=10:
// Query parameter to specify the number of issues to return per page. Here, it is set to 10.

// &state=open:
// Query parameter to filter the issues by their state. Here, it is set to 'open', so only open 
// issues are returned.

// &sort=created:
// Query parameter to sort the issues. Here, it is set to sort by the creation date of the issues.

// &direction=desc:
// Query parameter to specify the direction of the sort. Here, it is set to 'desc', 
// meaning the issues will be sorted in descending order (most recently created issues first).
// In the .then blocks:

// .then(function (response) { return response.json(); }): 
// Converts the response to JSON format.

// .then(function (data) { console.log(data); }):
// Logs the JSON data (list of issues) to the console.





