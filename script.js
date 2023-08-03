const button = document.querySelector('.navbar-toggler');
button.addEventListener("click", function() {
  this.classList.toggle("button-border");
});



function addClassesBasedOnWindowSize() {
    const navList = document.querySelectorAll('.navbar-nav');
    const windowWidth = window.innerWidth;
    
    for(let i=0;i< navList.length;i++){
    if (windowWidth > 991) {
      navList[i].classList.add('desktop-nav-ul');
   
    }
  }
}
addClassesBasedOnWindowSize();

window.addEventListener('resize', addClassesBasedOnWindowSize);




  

  
