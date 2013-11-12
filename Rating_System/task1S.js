function star_on(k)
{ for(var j=1;j<=k;j++) 
document.getElementById(j).src="star.jpg";
for(var i=k+1;i<=5;i++)
document.getElementById(i).src="starf.jpg";
}

function rating_msg(l)
{ 
alert("you have rated out of 5");
}
function x()
{ alert("Are you sure??Tts freaky poor!!");
}