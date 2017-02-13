document.addEventListener('DOMContentLoaded',function(){
    init();
});

var count=0;
function init(){
    var button=document.querySelector('#levelInputSubmit');
    document.addEventListener('keydown',function(evt){
        if(evt.keyCode<41&&evt.keyCode>36){
            movePiece(evt.keyCode);
            checkFinish();
        }
        button.addEventListener('click',function(){
            var Lv=document.querySelector('#levelInput');
            Lv=Lv.value;
            setLevel(Lv);
            count=0;
        })
    });
}
function movePiece(code) {
    count++;
    var space=document.querySelector('.space');
    var left=document.querySelector('.left');
    var right=document.querySelector('.right');
    var up=document.querySelector('.up');
    var down=document.querySelector('.down');
    var num;
    var id=space.id;
    if(code==37){
        num=right.innerHTML;
        space.innerHTML=num;
        right.innerHTML='';
        changeClass('right',id);
    }
    else if(code==38){
        num=down.innerHTML;
        space.innerHTML=num;
        down.innerHTML='';
        changeClass('down',id);
    }
    else if(code==39){
        num=left.innerHTML;
        space.innerHTML=num;
        left.innerHTML='';
        changeClass('left',id);
    }
    else if(code==40){
        num=up.innerHTML;
        space.innerHTML=num;
        up.innerHTML='';
        changeClass('up',id);
    }
}

function changeClass(direction,id){
    var idFirst=id.replace(/.(.)./,'$1');
    var idSecond=id.replace(/..(.)/,'$1');
    idFirst=Number(idFirst);
    idSecond=Number(idSecond);
    if(direction=='left') {
        if (idSecond < 2) return;
        idSecond -= 1;
    }
    else if(direction=='right') {
        if (idSecond > 3) return;
        idSecond += 1;
    }
    if(direction=='up') {
        if (idFirst < 2) return;
        idFirst -= 1;
    }
    if(direction=='down') {
        if (idFirst > 3) return;
        idFirst+= 1;
    }
    id='a'+idFirst+idSecond;
    document.querySelector('.space').classList.toggle('space');
    document.querySelector('#'+id).classList.toggle('space');
    var sur=document.querySelectorAll('.surround');
    for(var i=0;i<sur.length;i++){
            sur[i].classList.toggle('surround');
    }
    var left=document.querySelector('.left');
    var right=document.querySelector('.right');
    var up=document.querySelector('.up');
    var down=document.querySelector('.down');

    left.classList.toggle('left');
    left=document.querySelector('#a'+idFirst+(idSecond-1));
    left.classList.toggle('left');
    left.classList.toggle('surround');
    right.classList.toggle('right');
    right=document.querySelector('#a'+idFirst+(idSecond+1));
    right.classList.toggle('right');
    right.classList.toggle('surround');
    up.classList.toggle('up');
    up=document.querySelector('#a'+(idFirst-1)+idSecond);
    up.classList.toggle('up');
    up.classList.toggle('surround');
    down.classList.toggle('down');
    down=document.querySelector('#a'+(idFirst+1)+idSecond);
    down.classList.toggle('down');
    down.classList.toggle('surround');

}
function setLevel(Lv){
    document.querySelector('#a11').innerHTML=1;
    document.querySelector('#a12').innerHTML=2;
    document.querySelector('#a13').innerHTML=3;
    document.querySelector('#a14').innerHTML=4;
    document.querySelector('#a21').innerHTML=5;
    document.querySelector('#a22').innerHTML=6;
    document.querySelector('#a23').innerHTML=7;
    document.querySelector('#a24').innerHTML=8;
    document.querySelector('#a31').innerHTML=9;
    document.querySelector('#a32').innerHTML=10;
    document.querySelector('#a33').innerHTML=11;
    document.querySelector('#a34').innerHTML=12;
    document.querySelector('#a41').innerHTML=13;
    document.querySelector('#a42').innerHTML=14;
    document.querySelector('#a43').innerHTML=15;
    document.querySelector('#a44').innerHTML='';
    changeClass('','a44');
    mixPiece(Lv);
}
function mixPiece(Lv){
    var preNum=0;
    var randomCode=0;
    for(var i=0;i<Lv;i++){
        while(1) {
            randomCode = Math.floor((Math.random() * 4) + 37);
            if (randomCode != preNum)break;
        }
        preNum=randomCode;
        movePiece(randomCode);
    }
}
function checkFinish(){
    var a11=document.querySelector('#a11');
    var a12=document.querySelector('#a12');
    var a13=document.querySelector('#a13');
    var a14=document.querySelector('#a14');
    var a21=document.querySelector('#a21');
    var a22=document.querySelector('#a22');
    var a23=document.querySelector('#a23');
    var a24=document.querySelector('#a24');
    var a31=document.querySelector('#a31');
    var a32=document.querySelector('#a32');
    var a33=document.querySelector('#a33');
    var a34=document.querySelector('#a34');
    var a41=document.querySelector('#a41');
    var a42=document.querySelector('#a42');
    var a43=document.querySelector('#a43');

    if(a11.innerHTML!=1) return;
    if(a12.innerHTML!=2) return;
    if(a13.innerHTML!=3) return;
    if(a14.innerHTML!=4) return;
    if(a21.innerHTML!=5) return;
    if(a22.innerHTML!=6) return;
    if(a23.innerHTML!=7) return;
    if(a24.innerHTML!=8) return;
    if(a31.innerHTML!=9) return;
    if(a32.innerHTML!=10) return;
    if(a33.innerHTML!=11) return;
    if(a34.innerHTML!=12) return;
    if(a41.innerHTML!=13) return;
    if(a42.innerHTML!=14) return;
    if(a43.innerHTML!=15) return;

    finish();
}
function finish(){
    var message='Complete!<br>Your movingcount is '+count+'!';
    document.querySelector('#finish_message').innerHTML=message;

    document.querySelector('#a11').style.backgroundColor='#fcff50';
    document.querySelector('#a12').style.backgroundColor='#fcff50';
    document.querySelector('#a13').style.backgroundColor='#fcff50';
    document.querySelector('#a14').style.backgroundColor='#fcff50';
    document.querySelector('#a21').style.backgroundColor='#fcff50';
    document.querySelector('#a22').style.backgroundColor='#fcff50';
    document.querySelector('#a23').style.backgroundColor='#fcff50';
    document.querySelector('#a24').style.backgroundColor='#fcff50';
    document.querySelector('#a31').style.backgroundColor='#fcff50';
    document.querySelector('#a32').style.backgroundColor='#fcff50';
    document.querySelector('#a33').style.backgroundColor='#fcff50';
    document.querySelector('#a34').style.backgroundColor='#fcff50';
    document.querySelector('#a41').style.backgroundColor='#fcff50';
    document.querySelector('#a42').style.backgroundColor='#fcff50';
    document.querySelector('#a43').style.backgroundColor='#fcff50';
    document.querySelector('#a44').style.backgroundColor='#FFF';

}