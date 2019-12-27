// 首页中产品列表下拉展示动作
// 1. 查找出发事件的元素
var pullBtn=document.getElementById("pullBtn");
// 2. 绑定事件处理函数
pullBtn.onmouseover=function(){
    // 3. 查找要修改的元素
    var pullDown=document.getElementById("pullDown");
    console.log(pullDown)
    // 4. 修改元素
    pullDown.className="hidden";
    
}
pullBtn.onmouseout=function(){
    // 3. 查找要修改的元素
    var pullDown=document.getElementById("pullDown");
    console.log(pullDown)
    // 4. 修改元素
    pullDown.className="";
    
}