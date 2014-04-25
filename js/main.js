$(function() {
  var video = document.querySelector("#webcam");
   
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
   
  if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
  }
   
  function handleVideo(stream) {
    $(document).keypress(function(e) {
      if(e.keyCode == 32){
        video.src = window.URL.createObjectURL(stream);
      }
    });
  }
   
  function videoError(e) {
      // do something
  }

  

});
