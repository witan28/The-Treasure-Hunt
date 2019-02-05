$(".begin").click(function(){
    $(".textone").hide();
    $(".box").hide();
    $(".begin").hide();
    $(".texttwo").show();
    $(".eye").show();
});

$(".eye").hover(function(){
    $(".eye").hide();
    $(".texttwo").hide();
    $("body").css("background-color","red");
    $(".textthree").show();
});
$("body").dblclick(function(){
    $("body").css("background-color","blue");
    $(".textthree").slideToggle();
    $(".eyetwo").show();
    $(".textfour").show();
});
$(".eyetwo").click(function(){
    $(".eyetwo").fadeToggle();
    $(".textfour").hide();
    $("body").css("background-color","white");
    $(".textfive").show();
    $(".reward").show();
});

$(".texttwo").hide();
$(".eye").hide();
$(".textthree").hide();
$(".eyetwo").hide();
$(".textfour").hide();
$(".textfive").hide();
$(".reward").hide();

