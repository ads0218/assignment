
document.addEventListener('DOMContentLoaded',function(){
	init();
});

function init(){
	var BODY = document.querySelector('#BODY');
	var movingWrap = document.querySelector('#movingWrap');
	var slides=document.querySelectorAll('.set1 *');
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
	movingWrap.style.transition='transform 1s';
		moveSlide(target);
	}
	if(target.className=='indicater'){
		moveToIndicater(target);
	}
}
function moveSet(direct){
	var set1=document.querySelector('.set1');
	var set2=document.querySelector('.set2');
	var set3=document.querySelector('.set3');
	var set1T=getTranslate3d(set1.style.transform);
	var set2T=getTranslate3d(set2.style.transform);
	var set3T=getTranslate3d(set3.style.transform);
	if(direct=='left'){
		set1T-=1800;
		set2T-=1800;
		set3T-=1800;
	}
	else if(direct=='right'){
		set1T+=1800;
		set2T+=1800;
		set3T+=1800;
	}
	else{
		set1T=0;
		set2T=1800;
		set3T=3600;
	}
	setTranslate3d(set1,set1T);
	setTranslate3d(set2,set2T);
	setTranslate3d(set3,set3T);
}
function getTranslate3d(translate3d){
	var x=translate3d.replace(/translate3d\((.+)px, 0px, 0px\)/,'$1');
		x=Number(x);
		return x;
}
function setTranslate3d(ele,translate3d){
	translate3d='translate3d('+translate3d+'px,0px,0px)';
	ele.style.transform=translate3d;
}

function moveSlide(target){
	var movingWrapT=movingWrap.style.transform;
	var x;	
	var set1=document.querySelector('.set1');
	var set1T=set1.style.transform;
	x=getTranslate3d(movingWrapT);
	var set1X=getTranslate3d(set1T);
	if(target.id=='left'){
		if((x+set1X)==width) moveSet('left');
		x+=width;
	}
	else{
		if((x+set1X)==-width*countSlide) moveSet('right');
		x-=width;
	}
	setTranslate3d(movingWrap,x);
	changeColor(x,set1X,target.id);
}

function moveToIndicater(target){
	var indicater=target.id;
	indicater=indicater.replace(/indicater(\d+)/,'$1');
	indicater=Number(indicater);
	movingWrap.style.transition='none';
	var x=-(width*(indicater-1));
	translate3d='translate3d('+x+'px,0px,0px)';
	moveSet();
	movingWrap.style.transform=translate3d;
	var set1=document.querySelector('.set1');
	var set1T=set1.style.transform;
	var set1X=getTranslate3d(set1T);
	changeColor(x,set1X);
}
function changeColor(x,set1X,dir){
	var now=document.querySelector('.nowIndicater');
	var num=0;
	if(dir=='left') num =4-((x+set1X)/600)%3;
	else num=((-set1X-x)/600+1)%3;
	if(num==0)num=3;
	if(num==4)num=1;
	var indicater=document.querySelector('#indicater'+num);
	now.classList.toggle('nowIndicater');
	indicater.classList.toggle('nowIndicater');

}

}
