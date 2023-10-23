window.addEventListener('load', function(){
  fixedHeader();
  topBanner();
  handleScroll()
  });
                          
  function topBanner(){
      var banner = document.querySelector('#topBanner');
      if(!banner) return;
      var btnClose = banner.querySelector('.btnClose');
      btnClose.addEventListener('click', function(){
          banner.classList.add("hidden");
      });
  }
  
  function handleScroll(){
    var scrollPosition = 0;
    var ticking = false;
    var scrollY = window.scrollY || window.pageYOffset;
    window.addEventListener('scroll', function(e) {
          scrollPosition = window.scrollY || window.pageYOffset;
          if (ticking) return;
          window.requestAnimationFrame(function() {
              fixedHeader()
              ticking = false;
          });
          ticking = true;
    });
  }
  function fixedHeader() {
      var header = document.getElementById("header");
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if(scrollY > header.offsetTop) {
          header.classList.add("fixed");
      } else {
          header.classList.remove("fixed");
      }
  }