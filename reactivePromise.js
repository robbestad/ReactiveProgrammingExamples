require('es6-promise').polyfill();
require('isomorphic-fetch');
var $ = require("jquery");
var Rx = require("rxjs");

const puppiesStream = Rx.Observable
.fromPromise(
    fetch("http://www.reddit.com/r/puppies.json?limit=5")
  .then((response) => response.json())
);

puppiesStream.subscribe(
  function(posts) {
    posts.data.children.map((post)=>{
      $('#results')
      .append('<div>')
      .append($("<h3></h3>").text(post.data.title))
      .append($('<img>',{src:post.data.thumbnail}))
      .append('</div>')
    })
  }
);


