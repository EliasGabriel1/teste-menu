$(document).ready(function () {
    ValidarPagina();
  
    MenuDrop();
  
  })
  
  function ValidarPagina(){
    var id = $(".validate").attr("id");
    document.getElementById(id).classList.add("active");
  }
  
  function MenuDrop(){
    $("#toggle-menu").on("click", function(){
      $(".header__menu-ul").toggleClass("active")
    })
  }