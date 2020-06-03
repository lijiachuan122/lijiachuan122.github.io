// JavaScript Document
function addOnclickEvents(){
  alert("onclick事件添加成功");
  var imgs=document.getElementsByTagName("img");
  imgs[0].onclick=function(){alert("你选择了1号");}
  imgs[1].onclick=function(){alert("你选择了2号");}
}

var a1 = document.getElementById("a1");
a1.href="javascript:alert('请等待评选结果，谢谢！')";
