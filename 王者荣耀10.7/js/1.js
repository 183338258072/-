function checkUsername(l){
    var uselength=document.getElementById('check');
    var pl=document.getElementById('tip');
    if(uselength.value.length>l){
        pl.textContent='username must be < 5 character!';
    }
    else{
        pl.textContent='';
    }
}
var user=document.getElementById('check');
user.addEventListener('blur' ,function(){
    checkUsername(5);
},false);


//显示时间
function time(){
    var t1=document.getElementById('nowTime');
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDay();
    var date=time.getDate();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    // var second=time.getSeconds();//只显示加载完成时的秒
    t1.innerHTML=year+'-'+month+'-'+date+'-'+hour+'-'+minutes;
    
}
// var t=document.getElementById('time');
window.addEventListener('load',function(){
    time();
},false);


var change=document.getElementById('changebg');
change.addEventListener('click',function(){
    change.style.color='aqua';
    change.style.backgroundUrl='..//image/screenshot.png';
},false);
