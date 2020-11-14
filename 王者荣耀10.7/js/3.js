
  function show(sw){
    
        sw.style.display="block";
  }
  function hide(sw){
      sw.style.display="none";
  }
//第二个修改
// var sw=document.getElementById('header');
var bo=document.getElementsByClassName('bottom')[0];
var u=document.getElementsByTagName('ul')[0];
var l=u.getElementsByTagName('li')[1];
var br=document.getElementsByClassName('bottomr')[0];


var second=document.getElementsByClassName('second')[0];
var third=document.getElementsByClassName('third')[0];
var four=document.getElementsByClassName('four')[0];



l.addEventListener('mouseover',function(){
    show(bo);
},false);


//隐藏其他三项
l.addEventListener('mouseover',function(){
    hide(second);
},false);
l.addEventListener('mouseover',function(){
    hide(third);
},false);
l.addEventListener('mouseover',function(){
    hide(four);
},false);




l.addEventListener('mouseout',function(){
    hide(bo);
},false);

// 显示其他三项
l.addEventListener('mouseover',function(){
    show(second);
},false);
l.addEventListener('mouseover',function(){
    show(third);
},false);
l.addEventListener('mouseover',function(){
    show(four);
},false);




//JQuery使用
//显示腾讯游戏排行榜下拉部分
$('li.four').on('mouseover',function(){
    $('div.bottomr').css('display','block');
});

$('li.four').on('mouseout',function(){
    $('div.bottomr').css('display','none');
});

//JS使用


// four.addEventListener('mouseover',function(){
//     show(br);
// },false);

// four.addEventListener('mouseout',function(){
//     hide(br);
// },false);
