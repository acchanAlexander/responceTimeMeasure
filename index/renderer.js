$(function(){
  var wv = $('#wv')
    , clickedPosixTime
    , loadedPosixTime
    ;

  $('#buttonTwit').on('click', () => {
    clickedPosixTime = Date.now();
    wv.attr('src', 'https://twitter.com/')
  });

  $('#buttonGoogle').on('click', () => {
    clickedPosixTime = Date.now();
    wv.attr('src', 'https://google.co.jp/')
  });

  $('#wv').on('did-stop-loading', () => {
    loadedPosixTime = Date.now();

    calc();
  });

  function calc() {
    var diffPosixTime = loadedPosixTime - clickedPosixTime
      , diffMillSecond = new Date(diffPosixTime).getMilliseconds()
      ;

    $('#result').html(diffMillSecond);
  }
});
