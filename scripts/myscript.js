$(document).ready(function(){

var posleft, postop, pos;

var ch=0;
//____________________Screen 1___________________________
$( "#parlament" ).click(function() {
$("#sc1").remove();
$("#sc2").css("margin-top", 0);
ch=1;

});
$( "#winston" ).click(function() {
$("#sc1").remove();
$("#sc2").css("margin-top", 0);
ch=2;

});
$( "#kent" ).click(function() {
$("#sc1").remove();
$("#sc2").css("margin-top", 0);
ch=3;
});

//____________________Screen 2___________________________

$( "#tv1" ).click(function() {
$("#sc2").hide();
$("#sc3").css("margin-top", 0);
$("#error").fadeOut(200, function(){ 

$("#error").attr('src','img/errorcurve.png');
$("#error").fadeIn(200, function (){
$("#error").fadeOut(500, function(){
$("#error").attr('src','img/errornorm.png');
$("#error").fadeIn(1000);   
         setTimeout(function(){

          $("#sc2").show();
          $("#sc3").css("margin-top", 800);
         }, 2000)
});
});
});
});


$( "#tv2" ).click(function() {
$("#sc2").hide();
$("#sc3").css("margin-top", 0);
$("#error").fadeOut(200, function(){ 

$("#error").attr('src','img/errorcurve.png');
$("#error").fadeIn(200, function (){
$("#error").fadeOut(500, function(){
$("#error").attr('src','img/errornorm.png');
$("#error").fadeIn(1000);   

         setTimeout(function(){

          $("#sc2").show();
          $("#sc3").css("margin-top", 800);
         }, 2000)
});
});
});
});



$( "#tv3" ).click(function() {
$( "#tv2" ).remove();
$( "#tv1" ).remove();
$( "#sc2text" ).remove();
$( "#tv3" ).animate({
    marginLeft: "5in",
  }, 2000,

function()
{
  $( "#tv3").animate({
    marginLeft:-100,
    marginTop: -100,
    width: "120%"
  }, 10  ,function()
{
$("#sc2").remove();
$("#sc3").remove();
} );
}
  );

$("#video").css("margin-top", 0);

$("#b1").hide();
$("#b2").hide();
$("#b3").hide();

         setTimeout(function(){
    $("#keyvisual").hide();
    $("#keyvisual").fadeIn(2500);  
          
               setTimeout(function(){

        $("#keyvisual").remove();
		$('#movie').get(0).play();
         setTimeout(function(){
  if(ch==1)$("#b2").fadeIn(1500);
  if(ch==2)$("#b1").fadeIn(1500);
  if(ch==3)$("#b3").fadeIn(1500);
         }, 18000)

         }, 3000)
         }, 2000)


});
//____________________Screen Video___________________________



$( "#keyvisual" ).click(function() {

});


$( "#movie" ).click(function() {
document.location.href='game.html';
});

//____________________Screen Game___________________________

$("#lust").hide();
$("#try3").hide();
$("#try2").hide();
$("#cigs").hide();
$("#win").hide();

$("#try1").draggable({ 
     drag: function() {
    pos=$(this).position(); 
    posleft=pos.left;
    postop=pos.top; 


    if(posleft<(-300)){       
       if(postop<30 && postop>-30)
       {
         $("#filter2").remove();
         $("#try1").remove();
         $("#arrow2").remove();

         $("#try2").show();
         $("#try2").draggable();
       }
     if(postop<260 && postop>200)
       {
        $("#arrow3").attr('src', 'img/arrowred.png');
       }else
       {
       	$("#arrow3").attr('src', 'img/arrow.png');
       }
     if(postop>-290 && postop<-220)
      {
        $("#arrow1").attr('src', 'img/arrowred.png');
       }else
       {
       	$("#arrow1").attr('src', 'img/arrow.png');
       }
     }

 }});	

$("#try2").draggable({ 
     drag: function() {
    pos=$(this).position(); 
    posleft=pos.left;
    postop=pos.top; 


    if(posleft<(-300)){       
       if(postop<260 && postop>200)
       {
         $("#filter3").remove();
        $("#arrow3").remove();
         $("#try2").remove();

          $("#try3").show();
         $("#try3").draggable();
       }
            if(postop>-290 && postop<-220)
      {
        $("#arrow1").attr('src', 'img/arrowred.png');
       }else
       {
       	$("#arrow1").attr('src', 'img/arrow.png');
       }
     }

 }});	

$("#try3").draggable({ 
     drag: function() {
    pos=$(this).position(); 
    posleft=pos.left;
    postop=pos.top; 

    if(posleft<(-300)){       
       if(postop>-280 && postop<-200)
       {
         $("#filter1").remove();
         $("#try3").remove();
         $("#arrow1").remove();
         $("#textcatch").remove();

         $("#cigs").show();
         $("#win").show();

         $("#text1").css("margin-top", 650);
         $("#text1").css("margin-left", 865);
         $("#text2").css("margin-top", 660);
         $("#text2").css("margin-left", 120);
         $("#text3").css("margin-top", 650);
         $("#text3").css("margin-left", 520);


         setTimeout(function(){
         $("#text1").remove();
         $("#text2").remove();
         $("#text3").remove();
          $("#cigs").remove();
           $("#win").remove();
           $("#cornertext").remove();
           $("#lust").show();
         }, 3000)
 
       }}}});	

$( "#lust" ).click(function() {
document.location.href='index.html';
});




});