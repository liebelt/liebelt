function data()
{
	var today=new Date();
	var day=new Array(7);
	var m=today.getMinutes()
	var s=today.getSeconds()
	day[0]="Mon."
	day[1]="Tues."
	day[2]="Wed."
	day[3]="Thur."
	day[4]="Fri."
	day[5]="Sat."
	day[6]="Sun."
	m=checknumber(m);
	s=checknumber(s);
	document.getElementById("date1").innerHTML=today.getHours()+":"+m+":"+s;
	document.getElementById("date2").innerHTML=today.getDate()+"."+(today.getMonth()+1)+"."+today.getFullYear()+"  "+day[today.getDay()];
	setTimeout(function(){data()},500)
}

function checknumber(i)
{
	if(i<10){
		i="0"+i;
	}
	return i;
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ed99df11c78954ff288e94f77b4766bb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();