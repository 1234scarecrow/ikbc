// 轮播图功能
var i=0;            // 正在显示的第一张图片,0开始
var LIWIDTH=1200;   // 每张轮播图的宽度
var DURATION=500;   // 轮播图切换时动画时间
var LICOUNT=4;      // 设置li的懂个数
// 查找要显示的url
var ulImgs=document.getElementById("ul-imgs");
// 查找控制小圆点的ul
var ulIdxs=document.getElementById("ul-idxs");
// 查找小圆点
var lis=ulIdxs.children;

// 定义函数moveTo() 功能: 从当前位置移动至任意一个范围内的位置
function moveTo(to){
    if(to==undefined){      // 如果用户没有传入to 就跳动下一张
        to=i+1;
    }
    if(i==0){
        if(to>i){
            ulImgs.className="transition";
        }else{
            ulImgs.className="";
            ulImgs.style.marginLeft=-LICOUNT*LIWIDTH+"px";
            setTimeout(function(){
                moveTo(LICOUNT-1);
            },100);
            return;
        }
    }
    i=to;
    ulImgs.style.marginLeft=-i*LIWIDTH+"px";
    for(var li of lis){
        li.className="";
    }
    if(i==LICOUNT){
        i=0;
        setTimeout(function(){
            ulImgs.className="";
            ulImgs.style.marginLeft=0;
        },DURATION)
    }
    lis[i].className="active";
}

// 实现两个按钮功能
var btnLeft=document.getElementById("btn-left");
var btnRight=document.getElementById("btn-right");
var canClick=true;
function move(n){
    if(canClick){
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
            canClick=true;
        },DURATION+100);
    }
}
btnRight.onclick=function(){
    move(1);
}
btnLeft.onclick=function(){
    move(-1);
}

// 实现自动轮播,光标移入暂停播放
var interval=3000;
var timer=setInterval(function(){
    moveTo();
},3000);
var banner=document.getElementById("banner");
banner.onmouseover=function(){
    clearInterval(timer);
}
banner.onmouseout=function(){
    timer=setInterval(function(){
        moveTo();
    },3000);
}

// 实现索引li跳转相应图片
var ulIdxs=document.getElementById("ul-idxs");
var canClick=true;
ulIdxs.onclick=function(e){
    if(canClick){
        var li=e.target;
        if(li.nodeName="LI"){
            if(li.className!="active"){
                for(var i=0;i<lis.length;i++){
                    if(lis[i]==li){
                        break;
                    }
                }
            moveTo(i);
            setTimeout(function(){
                canClick=true;
            },DURATION);
            }
        }
    }
}