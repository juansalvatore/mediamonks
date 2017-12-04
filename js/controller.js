window.onload = function(){

  var animationEnd = setTimeout(function(){
    document.getElementById('animation').setAttribute('style', 'display: none;');
  }, 4800);

  // background image distance to left
  var backgroundLeftDistance = 0;
  // count page number
  var page = 0;
  // check if left arrow should be visible
  displayLeftArrow();

  // right arrow functionality
  document.getElementById('rightArrow').onclick = function() {
    rightArrowTextDisplay();
    page ++;
    document.getElementById('backgroundImage').setAttribute('style', 'left: ' + backgroundLeftDistance + 'px;');
    displayLeftArrow();
    displayRightArrow();
    pagination(page);
  }

  // left arrow functionality
  document.getElementById('leftArrow').onclick = function() {
    leftArrowTextDisplay();
    page --;
    document.getElementById('backgroundImage').setAttribute('style', 'left: ' + backgroundLeftDistance + 'px;');
    displayLeftArrow();
    displayRightArrow()
    pagination(page);
  }


  // check wether to display or not left arrow
  function displayLeftArrow() {
    if(page == 0) {
      document.getElementById('leftArrow').setAttribute('style', 'opacity: 0; cursor: default; pointer-events: none;');
    } else {
      document.getElementById('leftArrow').setAttribute('style', 'opacity: 1; cursor: pointer; pointer-events: auto;');
    }
  }

  function displayRightArrow() {
    if(page == 9) {
      document.getElementById('rightArrow').setAttribute('style', 'opacity: 0; cursor: default; pointer-events: none;');
    } else {
      document.getElementById('rightArrow').setAttribute('style', 'opacity: 1; cursor: pointer; pointer-events: auto;');
    }
  }

  // move white box in pagination
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

  // RIGHT ARROW TEXT DISPLAY
  function rightArrowTextDisplay(){
    if(page == 0) {
      backgroundLeftDistance -= 855;
      // first title gone when page 1
      document.getElementById('title').setAttribute('style', 'opacity: 0;');
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TALENT IS GIVEN</span><br><span>TRUE SKILL IS</span><br><span>EARNED</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 1) {
      backgroundLeftDistance -= 570;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>BE FLEXIBLE TO</span><br><span>CHANGE AND</span><br><span>STURDY IN</span><br><span>CONVICTION</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 2) {
      backgroundLeftDistance -= 880;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('rightText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('rightText').innerHTML = '<span>USE MANY SKILLS</span><br><span>YET WORK AS ONE</span>';
        document.getElementById('rightText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 3) {
      backgroundLeftDistance -= 870;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('rightText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('rightText').innerHTML = '<span>TO MASTER</span><br><span>ANYTHING FIND</span><br><span>INTEREST IN</span><br><span>EVERYTHING</span>';
        document.getElementById('rightText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 4) {
      backgroundLeftDistance -= 880;
      document.getElementById('rightText').innerHTML = '';
      document.getElementById('rightText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('rightText').innerHTML = '<span>INDIVIDUALS</span><br><span>FLUORISH</span><br><span>IF CULTURE</span><br><span>AND WISDOM</span><br><span>ARE SHARED</span>';
        document.getElementById('rightText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 5) {
      backgroundLeftDistance -= 950;
      document.getElementById('rightText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TRAIN FOR</span><br><span>PERFECTION BUT</span><br><span>AIM FOR MORE</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 6) {
      backgroundLeftDistance -= 1220;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TAKE PRIDE IN YOUR</span><br><span>WORK BUT DO NOT</span><br><span>SEEK PRAISE</span>';
      document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
    }, 700);
    }
    if(page == 7) {
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TEMPORARY</span><br><span>SACRIFICE BRINGS</span><br><span>LASTING RESULTS</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 8) {
      backgroundLeftDistance -= 820;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('finalTitle').setAttribute('style', 'display: block; z-index: 10; opacity: 0');
      document.getElementById('finalParagraph').setAttribute('style', 'display: block; z-index: 10; opacity: 0');
      var fade = setTimeout(function(){
        document.getElementById('finalTitle').setAttribute('style', 'display: block; opacity: 1;');
        document.getElementById('finalParagraph').setAttribute('style', 'display: block; opacity: 1;');
      }, 700);
    }
  }

  // LEFT ARROW TEXT DISPLAY
  function leftArrowTextDisplay() {
    if(page == 1) {
      backgroundLeftDistance += 855;
      // first title appears when back to page one
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('title').setAttribute('style', 'opacity: 1;');
    }
    if (page == 2) {
      backgroundLeftDistance += 570;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TALENT IS GIVEN</span><br><span>TRUE SKILL IS</span><br><span>EARNED</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 3) {
      backgroundLeftDistance += 880;
      document.getElementById('rightText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>BE FLEXIBLE TO</span><br><span>CHANGE AND</span><br><span>STURDY IN</span><br><span>CONVICTION</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 4) {
      backgroundLeftDistance += 870;
      document.getElementById('rightText').innerHTML = '';
      document.getElementById('rightText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('rightText').innerHTML = '<span>USE MANY SKILLS</span><br><span>YET WORK AS ONE</span>';
        document.getElementById('rightText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 5) {
      backgroundLeftDistance += 880;
      document.getElementById('rightText').innerHTML = '';
      document.getElementById('rightText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('rightText').innerHTML = '<span>TO MASTER</span><br><span>ANYTHING FIND</span><br><span>INTEREST IN</span><br><span>EVERYTHING</span>';
        document.getElementById('rightText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 6) {
      backgroundLeftDistance += 950;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('rightText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('rightText').innerHTML = '<span>INDIVIDUALS</span><br><span>FLUORISH</span><br><span>IF CULTURE</span><br><span>AND WISDOM</span><br><span>ARE SHARED</span>';
        document.getElementById('rightText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 7) {
      backgroundLeftDistance += 1220;
      document.getElementById('rightText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TRAIN FOR</span><br><span>PERFECTION BUT</span><br><span>AIM FOR MORE</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 8) {
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TAKE PRIDE IN YOUR</span><br><span>WORK BUT DO NOT</span><br><span>SEEK PRAISE</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
      }, 700);
    }
    if (page == 9) {
      backgroundLeftDistance += 820;
      document.getElementById('leftText').innerHTML = '';
      document.getElementById('leftText').setAttribute('style', 'opacity: 0;');
      document.getElementById('finalTitle').setAttribute('style', 'opacity: 0;');
      document.getElementById('finalParagraph').setAttribute('style', 'opacity: 0;');
      var fade = setTimeout(function(){
        document.getElementById('leftText').innerHTML = '<span>TEMPORARY</span><br><span>SACRIFICE BRINGS</span><br><span>LASTING RESULTS</span>';
        document.getElementById('leftText').setAttribute('style', 'opacity: 1;');
        document.getElementById('finalTitle').setAttribute('style', 'display: none; opacity: 0;');
        document.getElementById('finalParagraph').setAttribute('style', 'display: none; opacity: 0;');
      }, 700);
    }
  }



  function erasePreviousText() {
    document.getElementById('title').setAttribute('style', 'opacity: 0;');
    document.getElementById('leftText').innerHTML = '';
    document.getElementById('rightText').innerHTML = '';
  }
}
