require('es6-promise').polyfill();
require('isomorphic-fetch');
var $ = require("jquery");

fetch("http://www.reddit.com/r/puppies.json?limit=5")
.then((response) => response.json())
.then((data) => {
  $('#results')
  .empty()
  var i=0;
  while(i < data.data.children.length) {
    $('#results')
    .append('<div>')
    .append($("<h3></h3>").text(data.data.children[i].data.title))
    .append($('<img>',{src:data.data.children[i].data.thumbnail}))
    .append('</div>')
    i++;
  }
});

