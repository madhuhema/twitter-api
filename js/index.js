document.querySelector("body").onload=function(){
    window.onscroll = function() {navScroll()};
    function navScroll() {
        var navbar = document.getElementsByClassName("top")[0];
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navbar.className = "top topFixed";
        } else {
            navbar.className = "top";
          }
    }
}