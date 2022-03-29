function updateDate(){
    var date=new Date();
    var setTime=document.getElementById("setTime");
    setTime.innerHTML=date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate=document.getElementById("setDate");
    setDate.innerHTML=date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+ date.getFullYear();  
}
setInterval(updateDate,100);
onload = updateDate();
var time = document.getElementById("time");
var body = document.getElementById("body");
var setColor = document.getElementById("setColor");
function getColor(){
    body.setAttribute("style","background:"+setColor.value+";");
    time.setAttribute("style","background:"+setColor.value+";");
    localStorage.setItem("Color",setColor.value);
}
function setColors(){
    setColor.value = localStorage.getItem("Color");
    body.setAttribute("style","background:"+setColor.value+";");
    time.setAttribute("style","background:"+setColor.value+";");
}
setInterval(setColor,100);
onload = setColors();