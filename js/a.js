function search() {
	var content = document.getElementById("content").value; 
	var engine = document.getElementById("btn").innerText;
	var url; 
	if("Google"===engine){
		url = "https://www.google.com/search?&q=";
	} else if("Baidu"===engine){
		url = "https://www.baidu.com/s?wd=";
	} else if("Bing"===engine){
		url = "https://cn.bing.com/search?ensearch=1&q=";
	} else if("S.O."===engine){
		url = "https://stackoverflow.com/search?q=";
	} else if("Github"===engine){
		url = "https://github.com/search?q=";
	} else {
		return;
	}
	window.location.href = url + content;
}
document.onkeydown = function(e){
	var ev = document.all ? window.event : e;
	if(ev.keyCode==13) {
	    search();
	}
}
window.onload = function(){
	var content_input = document.getElementById('content');
    content_input.focus();
}
var ipt=document.getElementById('btn'); 
var ul=document.getElementById('ul'); 
var li=ul.children; 
ipt.onclick = function(){
	ul.style.display='block';
};
for(var i=0;i<li.length;i++){
　　li[i].onclick=function(){
　　　　ipt.innerText=this.innerText; 
		ul.style.display='none'; 
　　};
}