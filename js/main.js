$(function(){
  $("#tglBtn").click(function(){
    $('#spNav').fadeToggle();
    $(this).toggleClass("btnStyle");

    $text = $("#tglBtn").text();
    if($text === "menu"){
      $("#tglBtn").text("close");
    }
    else{
      $("#tglBtn").text("menu");
    }
  })

});