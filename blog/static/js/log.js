/**
 * Created by Administrator on 2017/8/26.
 */
 function con() {
 	var If=confirm("是否确认提交");
 	if(If === true)
 	{
 		var i,flagW=0,flagw=0,flagd=0;
 		/*注:document.getElementById().value得到的均为字符串类型，可用parseInt()解析返回整型*/
 		var thisname=new Array(32);
 		thisname=document.getElementById("txtname").value;
 		var thispass=new Array(32);
 		thispass=document.getElementById("txtpass").value;
 		var thisemail=new Array(64);
 		thisemail=document.getElementById("email").value;
 		var thisphone=new Array(32);
 		thisphone=document.getElementById("phone").value;
 		if(!thisname.length)
 		{
 			alert("用户名不得为空，请重新输入");
 			re();
 			return;
 		}
 		var fn=thisname[0];
 		if(!((fn>='a'&&fn<='z')||(fn>='A'&&fn<='Z')||(fn>='0'&&fn<='9')))
 		{
 			alert("用户名格式错误，请重新输入");
 			re();
 			return;
 		}
 		for(i=1;i<thisname.length;i++)
 		{
 			if(thisname[i]===' ')
 			{
 				alert("用户名格式错误，请重新输入");
 				re();
 				return;
 			}
 		}
 		if(!thispass.length)
 		{
 			alert("密码不得为空，请重新输入");
 			re();
 			return;
 		}
 		for(i=0;i<thispass.length;i++)
 		{
 			if(!flagw&&thispass[i]>='a'&&thispass[i]<='z')
 			{
 				flagw=1;
 			}
 			else if(!flagW&&thispass[i]>='A'&&thispass[i]<='Z')
 			{
 				flagW=1;
 			}
 			else if(!flagd&&thispass[i]>='0'&&thispass[i]<='9')
 			{
 				flagd=1;
 			}
 			else if(thispass[i]===' ')
 			{
 				alert("密码中不得包含空格");
 				re();
 				return;
 			}
 		}
 		if(!(flagw&&flagW&&flagd))
 		{
 			alert("密码必须同时包含大小写字母及数字");
 			re();
 			return;
 		}
 		if(thisphone.length!==13)
 		{
 			alert("电话号码位数应有13位");
 			re();
 			return;
 		}
 		if(thisphone[0]!=='8'||thisphone[1]!=='6')
 		{
 			alert("电话号码位数应以86开头");
 			re();
 			return;
 		}
 		for(i=2;i<13;i++)
 		{
 			if(thisphone[i]<'0'||thisphone[i]>'9')
 			{
 				alert("电话号码位数只能以数字组成");
 				re();
 				return;
 			}
 		}
 	}
 }
 function res() {
 	var If=confirm("是否确认重置");
 	if(If===true)
 	{
 		re();
 	}
 }
 function re()
 {
 	var Form=document.getElementById("myform");
 	Form.reset();
 }
 function signin()
 {
 	var form2=document.getElementsByClassName("dis");
 	for(var i=0;i<form2.length;i++)
 	{
 		form2[i].style.display="none";
 	}
 	var sign1=document.getElementById("signin");
 	var sign2=document.getElementById("signup");
 	sign2.style.background="#2F99F5";
 	sign1.style.background="#2C3A46";
 }
 function signup()
 {
 	var form2=document.getElementsByClassName("dis");
 	for(var i=0;i<form2.length;i++)
 	{
 		form2[i].style.display="table-row";
 	}
 	var sign1=document.getElementById("signin");
 	var sign2=document.getElementById("signup");
 	sign1.style.background="#2F99F5";
 	sign2.style.background="#2C3A46";
 }