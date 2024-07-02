// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
const requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].url);
      console.log(data[i].user.login);
    }
    // TODO: Console log each issue's URL and each user's login
    console.log('----------');
    console.log('End of Github Repo Issues');
  });


  // You can add parameters to an API endpoint URL using query strings. 
  // A query string starts with a question mark (?) followed by key-value pairs 
  // separated by ampersands (&). Each key-value pair represents a parameter and its value.

// DNS (Domain Name System) is like the phonebook of the internet. 
// When you type a domain name (like www.example.com) into your browser, 
// DNS is responsible for finding the corresponding IP address so your browser 
// can load the website.
// This process allows users to use easy-to-remember domain names instead of having 
// to remember numeric IP addresses.

