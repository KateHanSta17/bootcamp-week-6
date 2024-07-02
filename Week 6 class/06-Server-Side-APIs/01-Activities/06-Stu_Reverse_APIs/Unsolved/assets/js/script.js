const requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// jQuery's `$.ajax` method is used to make asynchronous HTTP requests. 
// An asynchronous HTTP request is a method of making an HTTP request where the operation 
// is performed in the background, allowing the program to continue executing other tasks 
//while waiting for the request to complete. This is in contrast to a synchronous request, 
// where the program would halt and wait until the HTTP request is completed before moving 
// on to the next operation.
// It takes an options object where you can specify the URL, method, headers, 
// and other settings.
// An options object is a JavaScript object that is used to pass multiple parameters or 
// configuration settings to a function or method in a structured and organized manner. 
// This object can contain various key-value pairs that define different settings or behaviors 
// for the function or method being called.
// The `.then()` method is used to handle the response, which is returned as a parameter 
// to the callback function.
// The response is already parsed as a JavaScript object.

$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// The Fetch API provides a more modern way to make asynchronous requests and is built 
// into the browser.
// It returns a Promise that resolves to the Response object representing the response 
// to the request.
// In the context of the Fetch API and AJAX requests, a Promise is an object that represents
// the eventual completion (or failure) of an asynchronous operation and its resulting value.
// The `.then()` method is used to handle the response. The response needs to be 
// explicitly converted to JSON using the `.json()` method.
// The converted JSON data is then handled in another `.then()` method.

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// `XMLHttpRequest` is an older way to make HTTP requests and is also built into the browser.
// It uses event listeners to handle the response. The `onreadystatechange` event is fired 
// multiple times during the request.
// When `readyState` is `DONE`, the response is available and can be accessed via 
// `xhr.response`.
// The `open` method initializes the request, and the `send` method sends it.

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
// In all three methods (jQuery AJAX, Fetch API, and XMLHttpRequest), the data returned is 
// in JSON format.

// However, how you handle the response differs slightly:

// - With jQuery's `$.ajax`, the response is automatically parsed as JSON, so you can 
// directly work with the response object in the `.then()` method.

// - With Fetch API, the response needs to be explicitly converted to JSON using the 
// `.json()` method before you can work with it.

// - With XMLHttpRequest, the response is a raw string, and you might need to manually 
// parse it using `JSON.parse()` if you need to work with it as a JavaScript object.