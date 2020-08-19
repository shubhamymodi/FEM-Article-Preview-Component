$(".share-btn").click(function(){
  $(".social-icons").toggle("show", function(){
  if($(".social-icons").is(":visible")){
    $(".fa-circle").css("color", "#748295");
    $(".fa-share").css("color", "#fff");
  }
  else{
    $(".fa-circle").css("color", " #ecf2f8");
    $(".fa-share").css("color", "#6d7f97");
  }
})

  })
