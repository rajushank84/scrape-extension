var href = window.location.href;
var target = 'https://sfbay.craigslist.org/search/mca';

if (href === target) {
  var $results = $('.result-row');

  var text = '';
  Array.prototype.forEach.call($results, function(result) {
    var $title = $(result).find('.result-title');

    if ($title) {
      text = text + $title.html() + '\n';
    }
  });

  var $textarea = $('<textarea>', {id: 'scraped-data', class: 'scraped-data'});
  $textarea.attr('style', 'position: fixed; right: 10px; top: 10px; height: 400px; width: 400px; z-index: 10000;');
  $textarea.text(text);
  $('body').append($textarea);
}
