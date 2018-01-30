var selected=null; //触发拖动事件的对象
var refEleX,refEleY;  //拖动元素的当前左、上偏移，作为参考值
var prevCurX,prevCurY; //上次的鼠标位置，作为参考值
window.onload=init;

function dragInit(e){
  e.preventDefault();
  selected=e.currentTarget;//选中元素为绑定事件的对象，即figure元素
  refEleX=selected.offsetLeft;
  refEleY=selected.offsetTop;
  prevCurX=e.clientX;
  prevCurY=e.clientY;
  window.addEventListener("mousemove",updatePos);//鼠标移动事件得
  //绑定在鼠标按下事件所绑定的回调函数里面
  window.addEventListener("mouseup",cancelBinding)
}
function init(){
  var dragEle=document.querySelector(".draggable");
  dragEle.addEventListener("mousedown",dragInit);
  
}
function updatePos(e) {
  e.preventDefault();
  var curCurX=e.clientX;
  var curCurY=e.clientY;
  var dx=curCurX-prevCurX;
  var dy=curCurY-prevCurY;
  changeDragElePos(dx,dy); //改变拖动元素位置
  prevCurX=curCurX; //更新鼠标参考位置
  prevCurY=curCurY;
}
function changeDragElePos(deltaX,deltaY){
  refEleX+=deltaX; //更新拖动元素的坐标位置
  refEleY+=deltaY;
  selected.style.left= refEleX+'px';
  selected.style.top= refEleY+'px';
  
}
function cancelBinding() {
  window.removeEventListener("mousemove",updatePos);
  window.removeEventListener("mouseup",cancelBinding)
  selected=null; //让selected指向空对象。
}








