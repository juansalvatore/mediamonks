window.onload = function(){
  // right arrow functionality
  document.getElementById('rightArrow').onclick = function() {
    document.getElementById('leftArrow').className = "be-still";
  }

  // left arrow functionality
  document.getElementById('leftArrow').onclick = function() {
    document.getElementById('leftArrow').className = "be-still";
  }
}
