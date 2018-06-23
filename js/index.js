addLoadEvent(event);

function event(){
	if(!document.getElementById('images') || !document.getElementsByTagName('a'))
		return false;

	var images = document.getElementById('images');
    var links = images.getElementsByTagName('a');
    for(var i=0; i<links.length; i++){
    	links[i].onclick = function(){
    		return showPic(this) ? false : true;
    		
    	}
    }
}

function showPic(whichPic){
	if (!document.getElementById('pic') || !document.getElementById('description'))
		return false;

	var source = whichPic.getAttribute('href');
	var pic = document.getElementById('pic');
	pic.setAttribute('src',source);
	var title = whichPic.getAttribute('title');
	var description = document.getElementById('description');
	description.firstChild.nodeValue = title;

	return true;
}


function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function (){
			oldonload();
			func();
		}
	}
}
