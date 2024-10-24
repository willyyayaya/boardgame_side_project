window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("contentHeader1").style.fontSize = "30px";
  } else {
    document.getElementById("contentHeader1").style.fontSize = "50px";
  }
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("contentHeader2").style.fontSize = "30px";
  } else {
    document.getElementById("contentHeader2").style.fontSize = "50px";
  }
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("contentHeader3").style.fontSize = "30px";
  } else {
    document.getElementById("contentHeader3").style.fontSize = "50px";
  }
}