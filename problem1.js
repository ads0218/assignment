
/* 
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다./
 * todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 * 
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 * 
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */

function checkOverlap(li,todo){
	var liContent=[];
	for(var i=0;i<li.length;i++){
		liContent.push(li[i].innerHTML);
	}
	var check=liContent.indexOf(todo);
	if(check!==-1){
		return false;
	}
	return true;
}

function error(message){
	document.querySelector(".message").innerHTML=message;
	setTimeout(function(){
		document.querySelector('.message').innerHTML='';
	},3000);
}

function add(ul,li,todo){
	var lengthList=[];
	var liLength=li.length;
	for(var i=0;i<liLength;i++){
		lengthList.push(li[i].innerHTML.length);
	}
	var todoLength=todo.length;
	var order=0;
	for(var i=0;i<liLength;i++){
		if(todoLength>lengthList[liLength-1]){
			order=liLength+'';
			ul.querySelector('li:nth-child('+order+')').insertAdjacentHTML('afterend','<li>'+todo+'</li>');
			return;
		}
		if(todoLength<=lengthList[i]){
			order=i+1+'';
			break;
		}
	}
	ul.querySelector('li:nth-child('+order+')').insertAdjacentHTML('beforebegin','<li>'+todo+'</li>');
}

function doSomething(actionType, todoORnumber)  {
	var ul=document.querySelector('ul');
	var li=ul.querySelectorAll('li');
	//add
	if(actionType=='add'){
		//checkOverlap and errorMessage
		if(checkOverlap(li,todoORnumber)==false){
			var message='Error! There is overlap!'
			error(message);
			return;
		}
		add(ul,li,todoORnumber);
		return;
	}
	//remove
	//nember error
	if(todoORnumber>li.length){
		var message='Number Error!'
		error(message);
		return;
	}
	ul.removeChild(li[todoORnumber-1]);
}


/* 
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.
 * 
 * 
 * 
 */

var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  doSomething(actionType, inputValue);
});

