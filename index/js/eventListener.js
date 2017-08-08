$(function(){
  $('.prg_transition_button').on('click', (evt) => {
    var transitionName = evt.target.dataset.transition;

    window.rtm.onClickedTransitionButton(transitionName);
  });
});
