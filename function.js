/* la fonction a faire apparaitre le menu au clic  */


let togg1 = document.getElementById("togg1");

let d1 = document.getElementById("menu");

togg1.addEventListener("click", () => {
  if(getComputedStyle(menu).display != "none"){
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
})



/* la fonction suivante sert à réduire le logo au scroll  */


window.onscroll = function() {
    growShrinkLogo()
  };
  
  function growShrinkLogo() {
    var Logo = document.getElementById("logo-nav")
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      Logo.style.width = '3vw';
    } else {
      Logo.style.width = '5vw';
    }
  }
  