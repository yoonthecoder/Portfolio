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
  const menu = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-items');


  menu.addEventListener('click', () => {
    // nav.style.transform = "translateX(0%)";
    nav.classList.toggle('nav-active');
    
  });

// Transforming to close btn
  $(".hamburger").click(function(){
    $(".hamburger").toggleClass("close");
  });
