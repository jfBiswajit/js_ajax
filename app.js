const xhr = new XMLHttpRequest();
const method = 'GET';
const url = 'https://jsonplaceholder.typicode.com/posts';

xhr.open(method, url);
xhr.addEventListener('load', function () {
  console.log('loaded');
})

xhr.send();
