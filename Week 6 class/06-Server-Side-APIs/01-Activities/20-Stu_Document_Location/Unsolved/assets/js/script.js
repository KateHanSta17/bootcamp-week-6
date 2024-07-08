const badRequestUrl = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  if (response.status === 404) {
    window
      .location
      .replace(redirectUrl);
  }
  return response.json();
}
).then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.error(error);
});
