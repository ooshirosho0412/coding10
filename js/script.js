function toggleClasses() {
    hamburger.classList.toggle('opeen');
      menu.classList.toggle('opeen');
      $("body").toggleClass("active");
  }



document.querySelector('.hanbarger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector(".han-menu-crick, .ap").classList.toggle('active');
});
document.querySelector('.hanbarger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector(' .hanbarger').classList.toggle('active');
});
$('.hanbarger').on('click', function () {
    $('.ap').addClass('active');
});



