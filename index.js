// AOS
AOS.init();

// Navbar Scroll effect 
window.addEventListener("scroll", function() {
    let navbar = document.querySelector('.navbar');

    if(window.pageYOffset > 0) {
      navbar.classList.add('scroll-nav');
      navbar.style.transition= "all 0.1s";
    }else {
      navbar.classList.remove("scroll-nav");
    }
  });

//Filter Work
$(document).ready(function(){
  $('.filter-btn').click(function(){
    const value= $(this).attr('data-filter');
    if (value == 'all'){
      $('.filter-div').show('1000');
    }else {
      $('.filter-div').not('.'+value).hide('1000');
      $('.filter-div').filter('.'+value).show('1000');
    }
  })
})

// add active class on selected tab
$('.filter-btn').click(function(){
  $(this).addClass('tab-active').siblings().removeClass('tab-active');
})


// Mobile Menu 
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-items');
  // const navLinks = document.querySelectorAll('.nav-items li');

  hamburger.addEventListener('click', () => {
    console.log("I got clicked!");
    console.log(nav);
    // nav.style.transform = "translateX(0%)";
    nav.classList.toggle('nav-active');
    
  });



// function filterWork(filter) {
//   var elements = document.getElementsByClassName("filter-div");
//   console.log(elements);
//   if (filter === "all") {
//     filter = "";
//   }
//   for (i = 0; i < elements.length; i++) {
//     elements[i].classList.add ="filter-show";
//     console.log(elements[i].classList);
//   }
// };

// filterWork("all");
