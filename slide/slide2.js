
document.addEventListener('DOMContentLoaded',function(){
	init();
});

function init(){
	var BODY = document.querySelector('#BODY');
	var movingWrap = document.querySelector('#movingWrap');
	var slides=document.querySelectorAll('.slide');
	var countSlide=slides.length;
	var width = setCSS(slides[0],'width');
	width=width.replace(/(\d+)px/,'$1');
	width=Number(width);
	BODY.addEventListener('click',fn);


function setCSS(ele,pro){
	var CSS = window.getComputedStyle(ele, null).getPropertyValue(pro);
	return CSS;
}

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
		if(x==600) x=-1200;
		else x+=width;
	}
	else{
		var x=translate3d.replace(/translate3d\((.+)px, 0px, 0px\)/,'$1');
		x=Number(x);
		if(x==-600) x=0;
		else x-=width;
	}
	translate3d='translate3d('+x+'px,0px,0px)';
	movingWrap.style.transform=translate3d;
}

function moveToIndicater(target){
	var indicater=target.id;
	indicater=indicater.replace(/indicater(\d+)/,'$1');
	indicater=Number(indicater);
	var x=-(width*(indicater-1));
	translate3d='translate3d('+x+'px,0px,0px)';
	movingWrap.style.transform=translate3d;	
}

}
