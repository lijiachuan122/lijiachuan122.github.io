// JavaScript Document
function addOnclickEvents(){
  alert("onclick�¼���ӳɹ�");
  var imgs=document.getElementsByTagName("img");
  imgs[0].onclick=function(){alert("��ѡ����1��");}
  imgs[1].onclick=function(){alert("��ѡ����2��");}
}

var a1 = document.getElementById("a1");
a1.href="javascript:alert('��ȴ���ѡ�����лл��')";
