const input = $(".input");
const $results = $('#results');

//const search = () => {
//  fetch("http://www.reddit.com/r/puppies.json?limit=5")
//  .then((response) => console.log(response.json())) }

function searchWikipedia (term) {
  return $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: term
    }
  }).promise();
}

const keyup = Rx.Observable.fromEvent(input, 'keyup')
.map((e)=>{
  return e.target.value;
})
.filter((input)=>{
  return input.length > 2;
})
.debounce(250)
.distinctUntilChanged()
.flatMapLatest(
  searchWikipedia
)
.subscribe(
  data => {
    $results
    .empty()
    .append($.map(data[1], value =>  $('<li>').text(value)))
  },
  error=> {
    $results
    .empty()
    .append($('<li>'))
    .text('Error:' + error);
  });
