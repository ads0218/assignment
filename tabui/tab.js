document.addEventListener('DOMContentLoaded',function(){
	init();
});

function select(sel){
	return document.querySelector(sel);
}

function init(){
	var nav=select('nav');
	nav.addEventListener('click',clickEvt);
	var tag;
}

function clickEvt(evt){
	tag=evt.target;
	if(tag.tagName=='SPAN'){
		tag=tag.parentElement
	}
	if(tag.tagName=='NAV'){
		return;
	}
	changeColor(tag);

	if(tag.dataset.click==0){
		var url=tag.dataset.url;
		callAjax(url,writeData);
		tag.dataset.click++;
		return;
	}

	var id='my_'+tag.id;

	var section=select('#'+id);
	var delSection=select('.eleDisplayShow')

	delSection.classList.toggle('eleDisplayShow');
	section.classList.toggle('eleDisplayShow');

}

function writeData(){
	var data=JSON.parse(this.responseText);
	var id='my_'+tag.id;

	var section=select('#'+id);
	var delSection=select('.eleDisplayShow')
	var content=delSection.innerHTML;

	//use saving at html
	var newContent = select('#temp').innerHTML
	newContent=newContent.replace('{{title}}',data.title);
	newContent=newContent.replace('{{body}}',data.body);
	section.innerHTML=newContent;
	//end use saving at html

	// //use string replace
	// var delMyName = select('.myName').innerHTML;
	// var delMyDesc = select('.myDesc').innerHTML;

	// var newContent = content.replace(delMyName,data.title);
	// newContent = newContent.replace(delMyDesc,data.body);

	// section.innerHTML = newContent;
	// //end use string replace

	delSection.classList.toggle('eleDisplayShow');
	section.classList.toggle('eleDisplayShow');

	//section.innerHTML=content;
	// var myName=select('.myName');
	// var myDesc=select('.myDesc');
	// myName.innerHTML=data.title;
	// myDesc.innerHTML=data.body;

	}

function callAjax(url,fn){
	var XHR=new XMLHttpRequest();
	XHR.addEventListener('load',fn);
	XHR.open('GET',url);
	XHR.send();
}

function changeColor(nav){
	var selectedTab=select('.selectedTab');
	selectedTab.classList.toggle('selectedTab');
	nav.classList.toggle('selectedTab');
}