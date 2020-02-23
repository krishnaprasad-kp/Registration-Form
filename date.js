function getDate(){
    datObj=new Date()
document.getElementById("date").innerHTML=datObj;
}
function getDateUsingMs(){
    datObj=new Date(2023);
    document.getElementById("date").innerHTML=datObj;
}
function getDateUsingDataString(){
    datObj=new Date("20-jan-1999,");
    document.getElementById("date").innerHTML=datObj;  
}
function dateMethods(){
    datObj=new Date("20-jan-1999,");
    s='Input : '+'20-jan-1999,'
    s+='<br/>datObj.getdate() date :'+datObj.getDate();
    s+='<br/>datObj.getDay() Day : '+datObj.getDay()
    s+="<br/>datObj.getMonth() Month "+datObj.getMonth()
    s+="<br/>datObj.getYear() Year "+datObj.getYear()
    s+="<br/>datObj.getHours() Hours "+datObj.getHours()
    s+="<br/>datObj.getMinutes() Minutes "+datObj.getMinutes()
    s+="<br/>datObj.getSeconds() Seconds "+datObj.getSeconds()
    s+="<br/>datObj.getMilliseconds() Milli Seconds "+datObj.getMilliseconds()
    s+='<br/> setting year to 2023 datObj.setFullYear(2023)'
    datObj.setFullYear(2023)
    s+="<br/>datObj.getYear() Year "+datObj.getFullYear()
    s+='<br/> setting date to 385 datObj.setDate(385)'
    datObj.setFullYear(385)
    s+="<br/>datObj.getYear()  "+datObj

    document.getElementById("date").innerHTML=s;
}