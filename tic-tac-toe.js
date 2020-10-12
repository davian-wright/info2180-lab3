window.onload = function(){

const board = document.getElementById("board");
const btn = document.getElementById(".btn");
const statusDisplay = document.querySelector('.status');
board.setAttribute("class", "board");
	for(let e=0; e<=9; e++){
		board.getElementsByTagName("div")[e].setAttribute("class", "square");
	}
}

/*
function myFunction() {
  var x = document.getElementById("myBtn").innerText;
  document.getElementById("demo").innerHTML = x;  
}


*/