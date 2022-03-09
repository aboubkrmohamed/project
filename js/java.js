 
$("#backthisproject").click(function () { 

    $(".back-this-project").show(800);
 })
 $("#close").click(function()
 {
    $(".back-this-project").hide(0);

 })

 
 $("#radio-two").click(function(){
     $(".div-two").css({height:"220px"});
     $(".inside-section").css({height:"1000px"});
     $(".div-two").css({border:"4px rgb(112, 252, 205) solid"});
     $(".div-hover-main").show(800);


 })
$("#button2").click(function() {
    $(".back-this-project").hide(500);
    $(".last-step").show(1000)
})