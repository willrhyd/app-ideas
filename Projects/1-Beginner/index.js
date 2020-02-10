$( "input" ).change(function(){
  var radVal = $("input").val();
  $( ".box" ).css("border-radius", radVal + "px");

  $("#outputCSS").text("border-radius: " + radVal + "px" );
});
