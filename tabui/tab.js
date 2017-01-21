var nav=document.querySelector('nav');
nav.addEventListener('click',clickEvt);
var tag;

function clickEvt(evt){
	tag=evt.target;
	if(tag.tagName=='SPAN'){
		tag=tag.parentElement
	}
	if(tag.tagName=='NAV'){
		return;
	}
	changeColor(tag);
	var url=tag.dataset.url;
	callAjax(url,writeData);
}

function writeData(){
	var data=JSON.parse(this.responseText);
	var id='my_'+tag.id;
	var section=document.querySelector('#'+id);
	var delSection=document.querySelector('.eleDisplayShow')
	var content=delSection.innerHTML;
	delSection.innerHTML='';
	delSection.classList.toggle('eleDisplayShow');
	section.classList.toggle('eleDisplayShow');
	section.innerHTML=content;
	var myName=document.querySelector('.myName');
	var myDesc=document.querySelector('.myDesc');
	myName.innerHTML=data.title;
	myDesc.innerHTML=data.body;
}

function callAjax(url,fn){
	var XHR=new XMLHttpRequest();
	XHR.addEventListener('load',fn);
	XHR.open('GET',url);
	XHR.send();
}

function changeColor(nav){
	var selectedTab=document.querySelector('.selectedTab');
	selectedTab.classList.toggle('selectedTab');
	nav.classList.toggle('selectedTab');
}