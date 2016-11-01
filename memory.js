var p = 0;
var text = "";
var nr = 4;
var possible = "0123456789";
var g= 0;
var lev = 3;
var a;
var score=0;
var timePeriodInMs = 1000;
function numbers() {
	possible = "0123456789";
	start();
}
function letters() {
	possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	start();
}

function combination() {
	possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789";
	start();
}
function main() {
document.getElementById("start").style.display = "block"; 
document.getElementById("start1").style.display = "block"; 
document.getElementById("start2").style.display = "block";
document.getElementById("game").style.display = "none";
document.getElementById("panelx").style.display = "none";}
function start(){
document.getElementById("panel").style.display = "block";
document.getElementById("game").style.display = "none"; 
document.getElementById("zzz").innerHTML = "Level " + lev / 3; 
document.getElementById("start").style.display = "none"; 
document.getElementById("start1").style.display = "none"; 
document.getElementById("start2").style.display = "none"; 
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
document.getElementById("answer").style.display = "block"; 
document.getElementById("ver1").style.display = "block"; }, 
timePeriodInMs); 
block();}
function ver() {
var a = document.getElementById("answer").value;
if ( a == text) {
score = score+ 100;
p=p+1;
lev++;
if (p==3){
nr++;
timePeriodInMs = timePeriodInMs + 250;
p=0;
document.getElementById("panel").style.display = "block";
document.getElementById("game").style.display = "none"; 
document.getElementById("zzz").innerHTML = "Level " + lev / 3;}
document.getElementById('response').style.color = 'green';	
document.getElementById("response").innerHTML = "Good Job!"; 		
	} else {	
g=g+1;
if (g==3){
p = 0;
score=score - 300;
g= 0;
lev = 3;
nr=4;
timePeriodInMs = 3000;
panelx();}
document.getElementById('response').style.color = 'red';		
document.getElementById("response").innerHTML = "Try Again!";
	}	block1();		document.getElementById("answer").value = '';}

function block() {	document.getElementById("play").style.display = "none";
document.getElementById("response").style.display = "none";}

function block1() {
document.getElementById("ver1").style.display = "none";
document.getElementById("play").style.display = "block"; 
document.getElementById("response").style.display = "block";
document.getElementById("answer").style.display = "none"; }

function levl(){
document.getElementById("panel").style.display = "none"; 
document.getElementById("response").style.display = "none"; 
document.getElementById("game").style.display = "block"; 
go(); }

function hide() {
document.getElementById("panelx").style.display = "none";}

function panelx() {		document.getElementById("panelx").style.display = "block"; 
document.getElementById("res").innerHTML = "Youre score is: " + score;	document.getElementById("start").style.display = "none"; 
document.getElementById("start1").style.display = "none"; 
document.getElementById("start2").style.display = "none"; 
document.getElementById("game").style.display = "none"; 	}