window.onload = function(){
  // right arrow functionality
  var backgroundLeftDistance = 0;
  var page = 0;
  displayLeftArrow();
  document.getElementById('rightArrow').onclick = function() {
    backgroundLeftDistance -= 100;
    page ++;
    document.getElementById('backgroundImage').setAttribute('style', 'left: ' + backgroundLeftDistance + 'vw;');
    displayLeftArrow();
    pagination(page);
  }

  // left arrow functionality
  document.getElementById('leftArrow').onclick = function() {
    backgroundLeftDistance += 100;
    page --;
    document.getElementById('backgroundImage').setAttribute('style', 'left: ' + backgroundLeftDistance + 'vw;');
    displayLeftArrow();
    pagination(page);
  }


  // check wether to display or not left arrow
  function displayLeftArrow() {
    if(page == 0) {
      document.getElementById('leftArrow').setAttribute('style', 'opacity: 0; cursor: default; pointer-events: none;');
    } else{
      document.getElementById('leftArrow').setAttribute('style', 'opacity: 1; cursor: pointer; pointer-events: auto;');
    }
  }
  // change pagination index
  function pagination(page) {
    var page0 = document.getElementById('0');
    var page1 = document.getElementById('1');
    var page2 = document.getElementById('2');
    var page3 = document.getElementById('3');
    var page4 = document.getElementById('4');
    var page5 = document.getElementById('5');
    var page6 = document.getElementById('6');
    var page7 = document.getElementById('7');
    var page8 = document.getElementById('8');
    var page9 = document.getElementById('9');

    switch(page) {
      case 0:
        page0.className = "paginationActive";
        page1.removeAttribute("class");
        break;
      case 1:
        page1.className = "paginationActive";
        page0.removeAttribute("class");
        page2.removeAttribute("class");
        break;
      case 2:
        page2.className = "paginationActive";
        page1.removeAttribute("class");
        page3.removeAttribute("class");
        break;
      case 3:
        page3.className = "paginationActive";
        page2.removeAttribute("class");
        page4.removeAttribute("class");
        break;
      case 4:
        page4.className = "paginationActive";
        page3.removeAttribute("class");
        page5.removeAttribute("class");
        break;
      case 5:
        page5.className = "paginationActive";
        page4.removeAttribute("class");
        page6.removeAttribute("class");
        break;
      case 6:
        page6.className = "paginationActive";
        page5.removeAttribute("class");
        page7.removeAttribute("class");
        break;
      case 7:
        page7.className = "paginationActive";
        page6.removeAttribute("class");
        page8.removeAttribute("class");
        break;
      case 8:
        page8.className = "paginationActive";
        page7.removeAttribute("class");
        page9.removeAttribute("class");
        break;
      case 9:
        page9.className = "paginationActive";
        page8.removeAttribute("class");
        break;
      default:
        //
    }
    if(page == 1) {
      page1.className = "paginationActive";
      page0.removeAttribute("class");
    }


  }
}
