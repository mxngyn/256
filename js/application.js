$(document).ready(function() {
  game = new Game();
  $('html').keydown(function(event) {
    game.chaChaSlide(event.which);
  })
});
