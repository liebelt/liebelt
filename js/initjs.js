function data()
{
	var today=new Date();
	var day=new Array(7);
	var m=today.getMinutes()
	var s=today.getSeconds()
	day[0]="星期一"
	day[1]="星期二"
	day[2]="星期三"
	day[3]="星期四"
	day[4]="星期五"
	day[5]="星期六"
	day[6]="星期天"
	m=checknumber(m);
	s=checknumber(s);
	document.getElementById("date1").innerHTML="现在时间："+today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+" "+day[today.getDay()];
	document.getElementById("date2").innerHTML=today.getHours()+":"+m+":"+s
	setTimeout(function(){data()},500)
}

function checknumber(i)
{
	if(i<10){
		i="0"+i;
	}
	return i;
}
