window.onload=function(){
	var speed=30;	
	var tab=document.getElementById("demo");	
	var tab1=document.getElementById("demo1");	
	var tab2=document.getElementById("demo2");	

	tab2.innerHTML=tab1.innerHTML;

	var MyMar=setInterval(Marquee,speed);

	function Marquee(){
	
		if(tab2.offsetWidth-tab.scrollLeft<=0){
			tab.scrollLeft-=tab1.offsetWidth;
		}
		else{
			tab.scrollLeft++;
		}
	}
	tab.onmouseover=function() {
		clearInterval(MyMar);
	}
	tab.onmouseout=function() {
		MyMar=setInterval(Marquee,speed);
	}
}