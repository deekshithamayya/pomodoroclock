var myvar;
var totalsec;
var sessiontime;
var breaktime;
$("#reset").hide();
   
function alertify(){
if(totalsec>0){
  totalsec--;
  $("#timer").html(standardify(totalsec));
}
  else{
    clearInterval(myvar);
    startbreak();
  }
  
}
function starttimer(){
  setbg("session");
  $("#reset").show();
  $("#start").hide();
  sessiontime=$("#sessiontime").html();
  totalsec=sessiontime*60;
  $("#timer").html(standardify(totalsec));
    myvar=setInterval(alertify,1000);
}
function startbreak(){
  setbg("break");
   breaktime=$("#breaktime").html();
  totalsec=breaktime*60;
  $("#timer").html(standardify(totalsec));
    myvar=setInterval(breakify,1000);
  
}
function breakify(){
if(totalsec>0){
  totalsec--;
  $("#timer").html(standardify(totalsec));
}
  else{
    clearInterval(myvar);
    starttimer();
  }
  
}
function standardify(sec){
  var min,hrs;
  min=Math.floor(sec/60);
  sec=sec%60;
  hrs=Math.floor(min/60);
  min=min%60;
  hrs=zeropad(hrs+"");
  min=zeropad(min+"");
  sec= zeropad(sec+"");
  if(hrs=="00")
      return min+":"+sec
  else
    return hrs+":"+min+":"+sec;
}
function resettimer(){
  clearInterval(myvar);
   $("#reset").hide();
  $("#start").show();
  setbg("std");
  $("#sessiontime").html(sessiontime);
  $("#breaktime").html(breaktime);
  $("#timer").html("00:00");
  }
function incdec(par){
  var time;
  if (par=='decsession'){
   time= $("#sessiontime").html();
    if(time>1){
      time--;
      $("#sessiontime").html(time);
    }
    }
  if (par=='incsession'){
    time= $("#sessiontime").html();
    time++;
      $("#sessiontime").html(time);
    
  }
  if (par=='decbreak'){
     time= $("#breaktime").html();
    if(time>1){
      time--;
      $("#breaktime").html(time);
    }
    
  }
  if (par=='incbreak'){
      time= $("#breaktime").html();
     time++;
      $("#breaktime").html(time);
  }
}
function zeropad(num){
  if(num.length==1){
    return "0"+num;
  }
  else
    return num;
}
function setbg(type){
  if(type=="session"){
     $(".jumbotron").html("SESSION");
  $(".jumbotron,#timer,#start,#reset").css("background-color","#ff3c89");
  }
  if(type=="break"){
    $(".jumbotron").html("BREAK!");
  $(".jumbotron,#timer,#start,#reset").css("background-color","#4ba9b9");
  }
  if(type=="std"){
     $(".jumbotron").html("POMODORO CLOCK");
  $(".jumbotron,#timer,#start,#reset").css("background-color","#0f2");
  }
}