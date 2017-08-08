$(function(){
  window.rtm.onClickedTransitionButton = (transitionName) => {
    window.location.href = '../'+transitionName+'/'+transitionName+'.html';
  }
});

