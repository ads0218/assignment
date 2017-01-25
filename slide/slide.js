document.addEventListener('DOMContentLoaded',function(){
	init();
});

function init(){
	var BODY = document.querySelector('#BODY');
	var movingWrap = document.querySelector('#movingWrap');
	BODY.addEventListener('click',fn);
}
// function setCSS(ele,pro){
// 	var CSS = window.getComputedStyle(ele, null).getPropertyValue(pro);
// 	return CSS;
// }
function fn(evt){
	var target=evt.target;
	if(target.className=='button'){
		moveSlide(target);
	}
	if(target.className=='indicater'){
		moveToIndicater(target);
	}
}

function moveSlide(target){
	var translate3d=movingWrap.style.transform;
	if(target.id=='left'){
		var x=translate3d.replace(/translate3d\((.+)px, 0px, 0px\)/,'$1');
		x=Number(x);
		if(x==0) return;
		x+=600;
	}
	else{
		var x=translate3d.replace(/translate3d\((.+)px, 0px, 0px\)/,'$1');
		x=Number(x);
		if(x==-1200) return;
		x-=600;
	}
	translate3d='translate3d('+x+'px,0px,0px)';
	movingWrap.style.transform=translate3d;
}

function moveToIndicater(target){
	var x;
	if(target.id=='indicater1'){
		x=0;
	}
	if(target.id=='indicater2'){
		x=-600;
	}
	if(target.id=='indicater3'){
		x=-1200;
	}
	translate3d='translate3d('+x+'px,0px,0px)';
	movingWrap.style.transform=translate3d;	
}


