var p = 0;
var text = "";
var nr = 4;
var possible = "0123456789";
var g= 0;
var lev = 3;
var a;
var score=0;
var timePeriodInMs = 1000;
var speed;
function speed() {
	possible = "0123456789";
	lev = 3;
	timePeriodInMs = 200;
	speed=1;
	asdf();
	w3_close();
	start();
}

function numbers() {
	possible = "0123456789";
	timePeriodInMs = 1000;
	lev = 3;
	speed=0;
	asdf();
	w3_close();
	start();
}
function letters() {
	possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	timePeriodInMs = 1000;
	lev = 3;
	speed=0;
	asdf();
	w3_close();
	start();
}

function combination() {
	possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789";
	lev = 3;
	asdf();
	w3_close();
	start();
}

function ress() {
document.getElementById("panel").style.display = "none";
document.getElementById("game").style.display = "none";
document.getElementById("panelx").style.display = "none";
}
function main() {
document.getElementById("panel").style.display = "none";
document.getElementById("game").style.display = "none";
document.getElementById("panelx").style.display = "none";	
document.getElementById("asdfx").style.display = "block";
}
function start(){
document.getElementById("panel").style.display = "block";
document.getElementById("game").style.display = "none"; 
document.getElementById("res2").style.display = "none"; 
document.getElementById("panelx").style.display = "none";	
document.getElementById("zzz").innerHTML = "Level " + lev / 3; 
}
function go() {
text = ""
for( var i=0; i < nr; i++ )
text += possible.charAt(Math.floor(Math.random() * possible.length))
document.getElementById("change").style.display = "block";
document.getElementById("change").innerHTML = text;
setTimeout(function() 
{ 
document.getElementById("change").style.display = "none"; 
}, 
timePeriodInMs); 
setTimeout(function() 
{ 
document.getElementById("answer").style.display = "block"; 
document.getElementById("ver1").style.display = "block"; 
}, 
timePeriodInMs); 
block();
}


function ver() {
var a = document.getElementById("answer").value;

if ( a== text && speed == 1) {
score = score+ 100;
p=p+1;
lev++;
   if (p==3){
nr++;
timePeriodInMs = timePeriodInMs + 100;
p=0;
document.getElementById("panel").style.display = "block";
document.getElementById("game").style.display = "none"; 
document.getElementById("zzz").innerHTML = "Level " + lev / 3;
} 
document.getElementById('response').style.color = 'ForestGreen';	
document.getElementById("response").innerHTML = "Good Job!"; 
 } else if ( a == text) {
score = score+ 100;
p=p+1;
lev++;
     if (p==3){
nr++;
timePeriodInMs = timePeriodInMs + 250;
p=0;
document.getElementById("panel").style.display = "block";
document.getElementById("game").style.display = "none"; 
document.getElementById("zzz").innerHTML = "Level " + lev / 3;
} 
document.getElementById('response').style.color = 'ForestGreen';	
document.getElementById("response").innerHTML = "Good Job!"; 
} else {	
g=g+1;
if (g==3){
p = 0;
speed = 0;
score=score - 300;
g= 0;
lev = 3;
nr=4;
timePeriodInMs = 1000;
panelx();
}
document.getElementById('response').style.color = 'Tomato';		
document.getElementById("response").innerHTML = "Try Again!";
	}	block1();	
	document.getElementById("answer").value = '';
}

function block() {
	document.getElementById("play").style.display = "none";
	document.getElementById("response").style.display = "none";
}

function block1() {
	document.getElementById("ver1").style.display = "none";
	document.getElementById("play").style.display = "block"; 
	document.getElementById("response").style.display = "block";

document.getElementById("answer").style.display = "none"; 
}

function levl(){
	
document.getElementById("panel").style.display = "none"; 
document.getElementById("game").style.display = "block"; 
document.getElementById("panelx").style.display = "none";	


go();}

function count() {
	document.getElementById("panel").style.display = "none"; 
    document.getElementById("response").style.display = "none"; 
    setTimeout(function(){ 
	document.getElementById("res2").style.display = "block"; 
	document.getElementById("res2").innerHTML = "3"; }, 0);
    setTimeout(function(){ document.getElementById("res2").innerHTML = "2"; }, 1000);
    setTimeout(function(){ document.getElementById("res2").innerHTML = "1"; }, 2000);
	setTimeout(function(){ document.getElementById("res2").style.display = "none"; 
	document.getElementById("ver1").style.display = "none";
	document.getElementById("answer").style.display = "none"; }, 3000);
	setTimeout(function(){  levl();	}, 3100);
	
}

	function hide() {
		document.getElementById("panelx").style.display = "none";
	}

		function panelx() {
		document.getElementById("panelx").style.display = "block"; 
		document.getElementById("res").innerHTML = "Youre score is: " + score;
		document.getElementById("game").style.display = "none"; 
}


function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
	document.getElementById("game").style.display = "none"; 
	document.getElementById("panel").style.display = "none"; 
	document.getElementById("panelx").style.display = "none"; 
}
function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}

function asdf() {
document.getElementById("asdfx").style.display = "none"; 
	
}
